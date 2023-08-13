from flask import render_template, flash, redirect, url_for
from Salon_app import app
from Salon_app.forms import RegistrationForm, LoginForm
from Salon_app.models import User



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
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('account'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template("index.html", title='Welcome', form=form)


# @app.route('/login')
# def login():
#     return render_template("login.html")



@app.route('/register', methods=['GET','POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # user = Users.query.filter_by(email=form.email.data).first
        # if user is None:
        #     username = Users(name=form.username.data, email=form.email.data)
        #     db.session.add(user)
        #     db.session.commit()
        # username = form.username.data
        # form.username.data = ''
        # form.email.data = ''
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('index'))
    return render_template("register.html", title='Register', form=form)


@app.route('/account')
def account():
    return render_template("account.html")


@app.route('/logout')
def logout():
    return render_template("logout.html")


@app.route('/bookings')
def bookings():
    return render_template("bookings.html")