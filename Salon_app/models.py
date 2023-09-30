from datetime import datetime
from Salon_app import db, login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Registration form database
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(60), nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)
    booking = db.relationship('Booking', backref='author', lazy=True)

    def __repr__(self):
        return f"User('{self.id}', '{self.name}', '{self.username}', '{self.email}')"


# Database for booking creation
class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(50), nullable=False)
    timeFrame = db.Column(db.String(50), nullable=False)
    time = db.Column(db.String(10), nullable=False)
    massage = db.Column(db.String(50))
    facials = db.Column(db.String(50))
    handFoot = db.Column(db.String(50))
    waxing = db.Column(db.String(50))
    terms = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Create A repr method (what gets printed out)

    def __repr__(self):
        return f"Booking('{self.day}', '{self.timeFrame}', '{self.time}', '{self.massage}', '{self.facials}', '{self.handFoot}', '{self.waxing}')"
    
    def __init__(self, day, timeFrame, time, massage, facials, handFoot, waxing, terms, user_id):
        self.day = day
        self.timeFrame = timeFrame
        self.time = time
        self.massage = massage
        self.facials = facials
        self.handFoot = handFoot
        self.waxing = waxing
        self.terms = terms
        self.user_id = user_id