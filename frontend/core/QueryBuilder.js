/**
 * Starts building a search query as data is inputted
 */
function QueryBuilder () {
    var location = null;
    var distance = null;
    var term = null;
    var token = null;
    
    this.setLocation = function () {};
    this.setDistance = function () {};
    this.setTerm = function() {};
    
    this.setAccessToken = function (t) {
        token = t;
    };
    
    this.search = function () {
        var jsonReq = new XMLHttpRequest();
        jsonReq.open('GET' + token, 'https://api.yelp.com/v3/businesses/search');
        jsonReq.setRequestHeader('Bearer', token);
        jsonReq.onreadystatechange = function() {
            if (jsonReq.readyState !== 4 || jsonReq.status !== 200) return; 
            object = JSON.parse(jsonReq.responseText);
            callback(object);
        };

        jsonReq.send();
    };
}
