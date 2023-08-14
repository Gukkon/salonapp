from flask import render_template, flash, redirect, url_for
from Salon_app import app, db, bcrypt
from Salon_app.forms import RegistrationForm, LoginForm, ValidationError
from Salon_app.models import User
from flask_login import login_user, current_user, logout_user, login_required



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


# @app.route('/login')
# def login():
#     return render_template("login.html")



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



@app.route('/account')
def account():
    return render_template("account.html", title='Welcome')


@app.route('/logout')
def logout():
    logout_user()
    flash('You have successfully logged out', 'success')
    return redirect(url_for('index'))
    return render_template("logout.html")


@app.route('/bookings')
def bookings():
    return render_template("bookings.html")