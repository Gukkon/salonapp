import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
import logging
import psycopg2



app = Flask(__name__)

# Secret Key
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
# Add Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

# app.logger.setLevel(logging.DEBUG)
# formatter = logging.Formatter('[%(asctime)s] [%(levelname)s] - %(message)s')
# handler = logging.StreamHandler()
# handler.setFormatter(formatter)
# app.logger.addHandler(handler)

# Initialize The Database Instance
db = SQLAlchemy(app)
app.app_context().push()
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)






from Salon_app import routes