from flask import Flask, render_template, flash, url_for
from forms import RegistrationForm, LoginForm
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
# Add Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
# Secret Key


# Initialize The Database
db = SQLAlchemy(app)
app.app_context().push()

# Create Model (EDIT THIS !!! MAY NEED TO CREATE A MODELS.PY FILE)
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

# Create A String
    def __repr__(self):
        return '<Name %r>' % self.name






# Error Pages
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


@app.errorhandler(500)
def page_not_found(e):
    return render_template("500.html"), 500


# All html webpages
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()
    return render_template("index.html", title='Login', form=form)



@app.route('/register', methods=['GET','POST'])
def register():
    form = RegistrationForm()
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