# Imports
import os
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect
from sqlalchemy.ext.automap import automap_base

from flask import (
    Flask,
    render_template,
    jsonify,
    redirect)

# Create Engine

engine = create_engine("sqlite:///college_football_db.sqlite")

# Creating new mdoel from Database

Base = automap_base()

# Reflect Tables

Base.prepare(engine, reflect=True)

# Save Reference to table

print(Base.classes.keys())

Stadiums = Base.classes.stadium
Record = Base.classes.win_loss_record

###########################
#   Flask Setup
###########################

app = Flask(__name__)


# Flask Website

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/stadium")
def stadium():
    return render_template("stadium.html")

@app.route("/record")
def record():
    return render_template("record.html")


####   API SET UP   ####

@app.route("/api/stadiums")
def stadium_table():

    session = Session(engine)

    results = session.query(Stadiums.Stadium, Stadiums.Latitude, Stadiums.Longitude, Stadiums.City, Stadiums.State, Stadiums.Team, Stadiums.Conference, Stadiums.Capacity, Stadiums.Built).all()

    results = [list(r) for r in results]

    Team = [result[3] for result in results]
    Capacity = [result[4] for result in results]

    Stadium_results = {
        "Team": Team,
        "Capacity":Capacity
    }

    session.close()

    return jsonify(Stadium_results)

@app.route ("/api/records")
def record_table():

    session = Session(engine)

    results = session.query(Record.Team, Record.Won, Record.Lost, Record.Tied, Record.Percentage, Record.Years, Record.Total_Games, Record.Conference).all()

    results = [list (r) for r in results]
    
    Team = [result[3] for result in results]
    Capacity = [result[4] for result in results]

    team_results = {
        "Team": Team,
        "Capacity":Capacity
    }

    session.close()

    return jsonify()



if __name__ == "__main__":
    app.run(debug=True)