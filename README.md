# College-Football-Stadium-Analysis:https://collegefootballstadiumanalysis.herokuapp.com/

The objective of this project was to tell a story through interactive data visualizations. This project had us using databases(SQLite), HTML creation, Webscrapping and Jupyter notebook for compiling and cleaning up the data to use for our visualizations. 

This analysis we wanted to find out if college football stadiums had an impact on the win-loss records of the teams they played for based on popualtion. For this we scraped the data off of Wikipedia to get the stadium names, location, occupancy, win-loss records, school name, record attendance and conference that they played in. However to put this into geo map we had to use googles api and using the stadium names get the exact location of every stadiums Longitude and Latitude to put it on the map. This was a huge hurdle for us and used all the skills we had acquired to that point. 

![image](https://user-images.githubusercontent.com/83102597/145467461-6bc52b5b-d206-41ae-9466-5faac526479a.png)

We then cleaned the data on Jupyter notebook and made a database to pull from to create a place to query our data. This data would be sent to our app.js file where we took a flask app for our HTML and created our Geo map and our Barcharts for our analysis. Our SQLite had 2 tables one for the stadium data and one for the Win-loss records all of which we scraped off of the wikipedia. In our app.js we were also able to create a sorting drop down that would allow you to select conferences to look at rather than the entire NCAA.

![image](https://user-images.githubusercontent.com/83102597/145467550-c0e2f4ef-88f5-4ac6-8784-0a4a39dfe11f.png)
![image](https://user-images.githubusercontent.com/83102597/145467629-ba8e073d-91ed-4a9f-a580-359001574a2f.png)

