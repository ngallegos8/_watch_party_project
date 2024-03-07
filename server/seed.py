# #!/usr/bin/env python3

# # Standard library imports#
# from random import randint, choice as rc

# # Remote library imports
# from faker import Faker

# # Local imports
# from app import app
# from models import db, User, Venue, Event, Attendance



# if __name__ == '__main__':p
#     fake = Faker()
#     with app.app_context():
#         print("Deleting Customers")
#         User.query.delete()

#     stephen = User(username="Stephen", password="password")
#     db.session.add(stephen)
#     db.session.commit()

from app import app 
from models import db, User, Event, Venue
from faker import Faker
from random import randint
from datetime import datetime
import datetime

faker = Faker()
with app.app_context():
    print("Deleting Customers")
    User.query.delete()
    Event.query.delete()
    Venue.query.delete()


    stephen = User(username="Stephen", password="password")
    lucy = User( username="lucy", password="dogbone")
    taki = User( username="taki", password="woof")

    date_time_str = "2024, 5, 1, 23, 0, 0"
    date_time_obj = datetime.datetime(*map(int, date_time_str.split(", ")))

    boxingMatch = Event(name ="boxing match", date_time=date_time_obj, description="a boxing match", attending_count="5")
    tennisMatch = Event(name ="tennis match", date_time=date_time_obj, description="a tennis match", attending_count="4")
    squashMatch = Event(name ="squash match", date_time=date_time_obj, description="a squash battle", attending_count="10")
    
    fillmore_venue = Venue(username="Fillmore", password="fillmore", venue_name ="The Fillmore", location="1234 colfax")
    gothic_venue = Venue(username="Gothic", password="gothic", venue_name ="The Gothic", location="1234 broadway")
    marquis_venue = Venue(username="Marquis", password="marquis", venue_name ="The Marquis", location="1234 larimer")


    db.session.add(stephen)
    db.session.add(lucy)
    db.session.add(taki)

    db.session.add(boxingMatch)
    db.session.add(tennisMatch)
    db.session.add(squashMatch)

    db.session.add(fillmore_venue)
    db.session.add(gothic_venue)
    db.session.add(marquis_venue)
    db.session.commit()



    # events
    # id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String, nullable=False)
    # date_time = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    # description = db.Column(db.String)
    # attending_count = db.Column(db.Integer, default=0)
    # venue_id = db.Column(db.Integer, db.ForeignKey('venues.id'))