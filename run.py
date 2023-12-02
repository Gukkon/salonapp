import os
from Salon_app import app

if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=os.environ.get("DEBUG")
    )

# import os
# from Salon_app import app, db

# # Check if the app is running on Heroku
# is_heroku = os.environ.get('IS_HEROKU', None)

# if is_heroku:
#     # If running on Heroku, create tables and run the app
#     db.create_all()
# else:
#     # If running locally, run the app with debug mode
#     app.run(debug=True)
