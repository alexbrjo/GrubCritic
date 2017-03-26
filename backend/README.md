Deploying the Backend
=====================
This a very brief guide for deploying this small backend script using Python Flask on
Apache2. If you need a more detailed tutorial I'd suggest googling 'Python Flask on 
apache webserver'.

Installation Requirements
-------------------------
- Apache 2
- Python (and pip)
- Python Flask, requests, json

IMPORTANT: Have your web sever root at /var/www/static/ don't put flask directory in your
/var/www if it is set as the root of your static content

Step 1: create backend Directory
--------------------------------
On your remote server in the apache2 /var/www directory create a directory 'flask'. Add 
the contents of the GrubCritic backend. Create a 'grubCritic.wsgi' with the content:
```
import sys

sys.path.append('/var/www/flask')

from bouncer import app as application
``` 

Step 2: create frontend Directory
---------------------------------
Have your web sever root point to /var/www/<STATIC CONTENT>. Cd to your static content 
directory and mkdir GrubCritic. This is where you will deploy the frontend content from
the /dist folder of your local project.

Step 3: tell apache2 to use your WSGI
-------------------------------------
WSGIDaemonProcess bouncer user=<NOT ROOT> group=<NOT ROOT> threads=5 home=/var/www/flask/
WSGIScriptAlias /flask /var/www/flask/grubCritic.wsgi

<directory /var/www/flask>
        WSGIProcessGroup bouncer
        WSGIApplicationGroup %{GLOBAL}
        WSGIScriptReloading On
        Order deny,allow
        Allow from all
</directory>

Step 4: restart Apache
----------------------
```service restart apache2```
