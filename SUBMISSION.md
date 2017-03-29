Alex Johnson
Saturday, April 1st, 2017
NC State University. Raleigh,NC
git repo | deployed app

Good afternoon Capital One team,

I designed my restaurant recommender as a simple frontend HTML5 web app with a lightweight Python Flask backend. Using the Google Maps API and HTML5 geolocation I was able to plot the recommended restaurant using the Yelp! Fusion API on a map. I created a stylish design and simple, functional user interface to search for restaurants.

Design Rationale - Why Flask?
I am very comfortable in Java and JavaScript so initially I started assuming that I could deploy the app as static files. I quickly discovered that the Yelp API needed to be called from the backend (cross origin resource sharing was disabled). I wanted something lighter than a Java servlet or Jersey application, so I tried Ruby on Rails and Python Flask. I ended up choosing Python Flask because it was more beginner friendly. In under 100 lines I was able to wrap Yelp!’s API responses to my deployed app. User input is limited to reduce the amount of time I’d have to spend testing and debugging. 

Security 


Testing - or lack thereof
If I planned better I would’ve written unit tests using Jasmine and Karma, but since the project was a lot of design and relying on API’s I figured it wasn’t necessary. Looking back, if I’d written unit tests with some of my components I would’ve been able to finish a lot quicker. The only testing that was done was unstructured black box tests ran by 3 friends. One had a fatal JavaScript error thrown that I never addressed and the other 2 were able to use it fine. The browsers tested were Chrome, Safari and Firefox (didn’t take note of versions). The most common response was ‘..but it doesn’t let me drag the map’.

Closing
If I was to do this project again I would've put more time into planning before starting the project. Without much thought I dived in and started coding. Thank you for taking me out of my typical coding environment. This is my first time using the Google API, Yelp Fusion API, Python Flask and geolocation. Before they seemed intimidating, but now they don't seem that bad; they're actually pretty fun!
