from datetime import datetime
from Salon_app import db, login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Create Database Model (EDIT THIS !!! MAY NEED TO CREATE A MODELS.PY FILE)
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(60), nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)


# Create A repr method (what gets printed out)
    def __repr__(self):
        return f"User('{self.id}', '{self.name}', '{self.username}', '{self.email}')"