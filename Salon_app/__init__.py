import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
import psycopg2



app = Flask(__name__)
# Secret Key
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
# Add Database
# Old Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
# New Database
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

# Initialize The Database Instance
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

# with app.app_context().push():
#     db.create_all()





from Salon_app import routes