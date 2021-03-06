Grub Critic - Release 1.0
=========================
Find the best spot for some grub.

- Yelp business search through Yelp Fusion API
- HTML5 Geolocation
- Google Maps integration
- Stylish UI

Handling Users
--------------
I limited the amount of user input to reduce the time testing and developing. 
The user can only:
- Enter a text search
- Press search or next restaurant
- Press a link to Yelp

Testing & Developer Guide
-------------------------
The frontend and backend can each be worked on locally, but to test integration 
they have to be deployed (CORS and mixed origin make local integration tests 
hard). Testing is completely 'black box'. Unit tests could be written for some 
of the methods and Karma might be added in the future. If you are having trouble 
deploying there is a [deployment guide](backend/).

Frontend
--------
Run the default grunt task and open dist/index.html. 

Backend
-------
Run 'python backend/bouncer.py' and check localhost:5000/<request>

Resources
---------
- Yelp Fusion Documentation
- Google Maps API Documentation
- Facvicon.cc / created hamburger favicon
- color-hex.com / picked style colors
