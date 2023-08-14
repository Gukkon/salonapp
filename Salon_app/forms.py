from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from Salon_app.models import User


# Create a form Class 1 (Registration)

class RegistrationForm(FlaskForm):
        name = StringField('Name', validators=[DataRequired(), Length(min=2, max=20)])
        username = StringField('Username', validators=[DataRequired(), Length(min=5, max=20)])
        email = StringField('Email', validators=[DataRequired(), Email()])
        password = PasswordField('Password', validators=[DataRequired()])
        confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
        submit = SubmitField('Sign Up')

# Username already exists
        def validate_username(self, username):
                user = User.query.filter_by(username=username.data).first()
                if user:
                        raise ValidationError('Username already exists. Please select a new one')
# Email already exists
        def validate_email(self, email):
                user = User.query.filter_by(email=email.data).first()
                if user:
                        raise ValidationError('Email already taken. Please select a new one')



# Create a form Class 2 (Log in)

class LoginForm(FlaskForm):
        username = StringField('Username', validators=[DataRequired(), Length(min=5, max=20)])
        password = PasswordField('Password', validators=[DataRequired()])
        remember = BooleanField('Remember Me')
        submit = SubmitField('Log In')