from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo


# Create a form Class 1 (Registration)

class RegistrationForm(FlaskForm):
        name = StringField('Name', validators=[DataRequired(), Length(min=2, max=20)])
        username = StringField('Username', validators=[DataRequired(), Length(min=5, max=20)])
        email = StringField('Email', validators=[DataRequired(), Email()])
        password = PasswordField('Password', validators=[DataRequired()])
        confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
        submit = SubmitField('Sign Up')



# Create a form Class 2 (Log in)

class LoginForm(FlaskForm):
        username = StringField('Username', validators=[DataRequired(), Length(min=5, max=20)])
        password = PasswordField('Password', validators=[DataRequired()])
        remember = BooleanField('Remember Me')
        submit = SubmitField('Log In')