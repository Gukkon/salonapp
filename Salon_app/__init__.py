from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager



app = Flask(__name__)
# Secret Key
app.config['SECRET_KEY'] = 'c2b7b27b43f8e51ec21064a1cf61d961'
# Add Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

# Initialize The Database Instance
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

# with app.app_context().push():
#     db.create_all()





from Salon_app import routes