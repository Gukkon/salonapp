import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from decouple import config
import psycopg2



app = Flask(__name__)

# Secret Key
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# Add Database
DATABASE_URL = config('DATABASE_URL')

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')


app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True


# Initialize The Database Instance
db = SQLAlchemy(app)
app.app_context().push()
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)






from Salon_app import routes

# from Salon_app import routes
# import os
# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
# from flask_login import LoginManager
# from decouple import config

# app = Flask(__name__)

# # Secret Key
# app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# # Add Database
# DATABASE_URL = config('DATABASE_URL')
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')

# # Ensure that you set this to False on production, it's True for development only
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# app.config['SESSION_COOKIE_SAMESITE'] = 'None'
# app.config['SESSION_COOKIE_SECURE'] = True

# # Initialize The Database Instance
# db = SQLAlchemy(app)
# bcrypt = Bcrypt(app)
# login_manager = LoginManager(app)

# # Additional configuration if needed for Flask-Login
# login_manager.login_view = 'login'
# login_manager.login_message_category = 'info'


# if __name__ == "__main__":
#     # Ensure that the app is run only when executed directly, not when imported as a module
#     app.run(debug=True)
