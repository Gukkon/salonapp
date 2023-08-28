from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField, SelectField, RadioField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from Salon_app.models import User
from wtforms_alchemy import QuerySelectMultipleField


# Create a form Class 1 (Registration Form)

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



# Create a form Class 2 (Log in Form)

class LoginForm(FlaskForm):
        username = StringField('Username', validators=[DataRequired(), Length(min=5, max=20)])
        password = PasswordField('Password', validators=[DataRequired()])
        remember = BooleanField('Remember Me')
        submit = SubmitField('Log In')


# Form Class 3 (Booking form)

class BookingForm(FlaskForm):
        day = SelectField(
                choices=[
                        ('','Please Choose a Day'),
                        ('Monday','Monday'),
                        ('Tuesday','Tuesday'),
                        ('Wednesday','Wednesday'),
                        ('Thursday','Thursday'),
                        ('Friday','Friday'),
                        ('Saturday','Saturday'),
                        ('Sunday','Sunday')])

        timeFrame = SelectField(
                choices=[
                        ('','Please Choose a Time Slot'),
                        ('Morning(8am-12pm)','Morning(8am-12pm)'),
                        ('Afternoon(12pm-5pm)','Afternoon(12pm-5pm)'),
                        ('Evening(5pm-10pm)','Evening(5pm-10pm)')])

        time = StringField(validators=[DataRequired(), Length(max=3)])

        massage = SelectField(u'Massage',
                          choices=[
                                ('','Please Select a Treatment'),
                                ('Body Radiance','Body Radiance'),
                                ('Deep Tissue','Deep Tissue'),
                                ('Sports Massage','Sports Massage')])

        facials = SelectField(u'Facials',
                          choices=[
                                ('','Please Select a Treatment'),
                                ('Dermaplane Facial','Dermaplane Facial'),
                                ('Microneedling Facial','Microneedling Facial'),
                                ('Biotec Facial','Biotec Facial')])

        handFoot = SelectField(u'Hand & Foot',
                          choices=[
                                ('','Please Select a Treatment'),
                                ('Manicure','Manicure'),
                                ('Pedicure','Pedicure'),
                                ('Ultimate Foot Transformation','Ultimate Foot Transformation')])

        waxing = SelectField(u'Waxing',
                          choices=[
                                ('','Please Select a Treatment'),
                                ('Bikini Wax','Bikini Wax'),
                                ('Full Leg Wax','Full Leg Wax'),
                                ('Mens Ultimate Ritual','Mens Ultimate Ritual')])
        terms = BooleanField('By clicking, you are accepting our Terms and Conditions', validators=[DataRequired()])

        submit = SubmitField()
