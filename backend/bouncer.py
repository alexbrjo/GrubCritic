from flask import Flask
import requests
import json

#
# Very simple backend used to hide the keys. Simply bounces all Yelp
# fusion requests to the API and returns reponse
#
# TODO: cache 'Food' search by city?
#

from flask import Flask
app = Flask(__name__)

with open('keys.json') as yelp_keys:
    keys = json.load(yelp_keys)

auth = {'grant_type': 'client_credentials',
        'client_id': keys['yelp_fusion_app_id'],
        'client_secret': keys['yelp_fusion_app_secret']}

@app.route("/", methods=['GET'])
def getRestaurants():
    token = requests.post('https://api.yelp.com/oauth2/token', data=auth)
    access_token = token.json()['access_token']
    url = 'https://api.yelp.com/v3/businesses/search'
    headers = {'Authorization': 'bearer %s' % access_token}
    params = {'location': 'Raleigh',
            'term': 'Mexican Food',
            'pricing_filter': '1, 2',
            'sort_by': 'rating'
         }

    resp = requests.get(url=url, params=params, headers=headers)
    return resp.text

if __name__ == "__main__":
    app.run()
