from flask import Flask, request
import requests
import json
import pprint

# Very simple backend used to hide the keys. Simply bounces all Yelp
# fusion requests to the API and returns reponse
# TODO: cache 'Food' search by city?
from flask import Flask
app = Flask(__name__)

# Read Yelp id and secret from file
with open('keys.json') as yelp_keys:
    keys = json.load(yelp_keys)

# Get authentication token
auth = {'grant_type' : 'client_credentials',
        'client_id' : keys['yelp_fusion_app_id'],
        'client_secret' : keys['yelp_fusion_app_secret']}
token_resp = requests.post('https://api.yelp.com/oauth2/token', data=auth)
token = token_resp.json()['access_token']

# Response for GET business request
@app.route("/business", methods=['GET'])
def getRestaurants():
    
# default term is Food and always sort by distance
    params = {
        'term' : 'Food',
        'sort_by': 'distance'
    }
# Get possible query parameters
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    loc = request.args.get('location')
    
# Latitude and longitude have priority
    if lat and lng:
        params['latitude'] = lat
        params['longitude'] = lng

# Else try to use location
    elif loc:
        params['location'] = loc

# Default to Washington, DC
    else:
        params['location'] = 'Washington DC'

# Get search query term, if given
    term = request.args.get('term')
    if term:
        params['term'] = term

# Get price restriction
    price = request.args.get('pricing_filter')
    if term:
        params['pricing_filter'] = price

# Get search radius
    dist = request.args.get('radius')
    if term:
        params['radius'] = dist

# set GET request to Yelp API
    url = 'https://api.yelp.com/v3/businesses/search'
    headers = {'Authorization': 'bearer %s' % token}

    resp = requests.get(url=url, params=params, headers=headers)
    
# respond with Yelp resonse
    return resp.text

# if '> python business.py' run Flask
if __name__ == "__main__":
    app.run()
