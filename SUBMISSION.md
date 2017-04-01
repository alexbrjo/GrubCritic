Alex Johnson
Saturday, April 1st, 2017
NC State University
=================================

Good afternoon Capital One team,

I designed my restaurant recommender as a simple frontend HTML5 web app with a lightweight Python Flask backend. Using the Google Maps API and HTML5 geolocation I was able to plot the recommended restaurant using the Yelp! Fusion API on a map. It features a limited, but functional user interface to search for restaurants.

Design Rationale - Why Flask?
-----------------------------
I am very comfortable in Java and JavaScript so initially I assumed that I could deploy the app as static files. I quickly discovered that the Yelp API needed to be called from the backend (cross origin resource sharing was disabled). I wanted something lighter than a Java servlet or Jersey application, so I tried Ruby on Rails and Python Flask. I ended up choosing Python Flask because it was more beginner friendly. In under 100 lines on Python and noodling on an Apache web server I was able to send Yelp!’s API responses to my deployed app. 

Security 
-----------------------------
To build and deploy the application you must enter your own Google and Yelp Fusion API keys into the back and front end key files. The Yelp ones are entirely hidden from the front end, but the Google ones can be found in the minified source. The only thing the prevents a potential hacker from obtaining the Google key is searching through the minified source. 

Testing - or lack thereof
-----------------------------
If I planned better I would’ve written unit tests using Jasmine and Karma, but since the project was a lot of design and relying on APIs I figured it wasn’t necessary. Looking back, if I’d written unit tests for some of my components I would’ve been able to finish a lot quicker. The only testing that was done was unstructured black box tests ran by 3 friends. One had a fatal JavaScript error thrown that I never addressed and the other 2 were able to use it fine. The browsers tested were Chrome, Safari and Firefox (didn’t take note of versions). The most common response was ‘..but it doesn’t let me drag the map’.

Closing
-----------------------------
If I was to do this project again I would've put more time into planning before starting the project. Without much thought I dived in and just started coding. Thank you for taking me out of my typical coding environment. This is my first time using the Google API, Yelp Fusion API, Python Flask and geolocation. Before they seemed a little intimidating, but now they don't seem that bad; they're actually pretty fun!

-Alex
