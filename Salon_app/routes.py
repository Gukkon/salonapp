import os
from flask import render_template, flash, redirect, url_for, request
from Salon_app import app, db, bcrypt
from Salon_app.forms import RegistrationForm, LoginForm, BookingForm
from Salon_app.models import User, Booking
from flask_login import login_user, current_user, logout_user, login_required
import sqlite3
import psycopg2




@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


@app.errorhandler(500)
def page_not_found(e):
    return render_template("500.html"), 500



@app.route('/', methods=['GET','POST'])
def index():
    if current_user.is_authenticated:
        return redirect(url_for('account'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            return redirect(url_for('account'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template("index.html", title='Welcome', form=form)



@app.route('/register', methods=['GET','POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('account'))
    form = RegistrationForm()
    # Add user to database
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(name=form.name.data, username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You can now log in', 'success')
        return redirect(url_for('index'))
    return render_template("register.html", title='Register', form=form)


@app.route('/logout')
def logout():
    logout_user()
    flash('You have successfully logged out', 'success')
    return redirect(url_for('index'))



@app.route('/bookings', methods=['GET','POST'])
@login_required
def bookings():
    form = BookingForm()
    
    print('FORM', request.form)
    if request.method == 'POST':   
        
        
        booking = Booking(
            day=request.form.get('day'),
            timeFrame=request.form.get('timeFrame'),
            time=request.form.get('time'),
            massage=request.form.get('massage'),
            facials=request.form.get('facials'),
            handFoot=request.form.get('handFoot'),
            waxing=request.form.get('waxing'),
            user_id=current_user.id)
        
        db.session.add(booking)   
        db.session.commit()

        user_id = current_user.id
        bookings = Booking.query.filter_by(user_id=user_id).all()


        flash('Your treatment has been created successfully!')
        return render_template("account.html", title='Welcome', bookings=bookings, booking=booking)

    return render_template("bookings.html", form=form)


# Update Database record
@app.route('/update/<int:user_id>/<int:id>', methods= ['GET','POST'])
def update(user_id, id):
    form = BookingForm()
    
    name_to_update = Booking.query.filter_by(user_id=user_id, id=id).first_or_404()
    

    if request.method == "GET":  
        form = BookingForm(obj=name_to_update)  
    else:
        form = BookingForm(request.form)

    if request.method == "POST":
        name_to_update.day = request.form['day']
        name_to_update.timeFrame = request.form['timeFrame']
        name_to_update.time = request.form['time']
        name_to_update.massage = request.form['massage']
        name_to_update.facials = request.form['facials']
        name_to_update.handFoot = request.form['handFoot']
        name_to_update.waxing = request.form['waxing']

        try:
            db.session.commit()
            flash("Appointment Updated Successfully")
            return redirect(url_for('account'))
        except:
            flash("Error! Looks like we had a problem")
    
    return render_template("update.html", form=form, name_to_update=name_to_update, user_id=user_id)



@app.route('/account')
@login_required
def account():
    user_id = current_user.id
    bookings = Booking.query.filter_by(user_id=user_id).all()
    flash_message = "Your treatment has been created successfully!"
    return render_template("account.html", title='Welcome', bookings=bookings, flash_message=flash_message,user_id=user_id)


@app.route('/delete/<int:id>')
def delete(id):
    treat_to_delete = Booking.query.get_or_404(id)

    try:
        db.session.delete(treat_to_delete)
        db.session.commit()

        flash("Appointment Deleted Successfully")
        return redirect(url_for('account'))
    
    except:
        flash("Whoops, seems to be a problem. Try Again")
        return render_template("account.html")
