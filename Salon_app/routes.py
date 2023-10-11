import os
from flask import render_template, flash, redirect, url_for, request, current_app, Response
from Salon_app import app, db, bcrypt
from Salon_app.forms import RegistrationForm, LoginForm, ValidationError, BookingForm
from Salon_app.models import User, Booking
from flask_login import login_user, current_user, logout_user, login_required
import sqlite3



# Error Pages
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


@app.errorhandler(500)
def page_not_found(e):
    return render_template("500.html"), 500


# All html webpages (SORT THE IF STATEMENT TO REDIRECT TO ACCOUNT PAGE!)
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
    return render_template("logout.html")



@app.route('/bookings', methods=['GET','POST'])
@login_required
def bookings():
    form = BookingForm()
    # print('METHOD:', request.method)
    print('FORM', request.form)
    if request.method == 'POST':   
        # current_app.logger.debug('Form Data: %s', form.data)      
        # bookings = Booking(
        #     day = form.day.data, 
        #     timeFrame = form.timeFrame.data, 
        #     time = form.time.data, 
        #     massage = form.massage.data,
        #     facials = form.facials.data, 
        #     handFoot = form.handFoot.data, 
        #     waxing = form.waxing.data,
        #     terms = form.terms.data,
        #     user_id=current_user.id
        # )  

        input_value = request.form.get('terms')

        if input_value == 'y':
            terms_boolean = True
        elif input_value == 'n':
            terms_boolean = False
        else:
        # Handle invalid input or provide a default value as needed
            terms_boolean = False
        
        booking = Booking(
            day=request.form.get('day'),
            timeFrame=request.form.get('timeFrame'),
            time=request.form.get('time'),
            massage=request.form.get('massage'),
            facials=request.form.get('facials'),
            handFoot=request.form.get('handFoot'),
            waxing=request.form.get('waxing'),
            terms=terms_boolean,
            user_id=current_user.id)
        
    #     appointment = {
    #     'day': day,
    #     'time_frame': time_frame,
    #     'time': time,
    #     'massage': massage,
    #     'facials': facials,
    #     'hand_foot': hand_foot,
    #     'waxing': waxing,
    #     'terms': terms
    # }
    #     appointments.append(appointment)
  
        
        db.session.add(booking)   
        db.session.commit()

        flash('Your treatment has been created successfully!')
        return redirect(url_for('account'))

    return render_template("bookings.html", form=form)

@app.route('/account')
@login_required
def account():
    user_id = current_user.id
    bookings = Booking.query.filter_by(user_id=user_id).all()
    return render_template("account.html", title='Welcome', bookings=bookings)