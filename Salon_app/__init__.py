from flask import Flask
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
# Secret Key

# Add Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

# Initialize The Database Instance
db = SQLAlchemy(app)
# app.app_context().push()

from Salon_app import routes