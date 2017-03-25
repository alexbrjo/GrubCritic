/**
 * Starts building a search query as data is inputted
 */
function QueryBuilder () {
    var location = null;
    
    this.setLocation = function () {};
    this.setDistance = function () {};
    this.setTerm = function() {};
    
    this.search = function (v) {
        var jsonReq = new XMLHttpRequest();
        jsonReq.open('GET', 'https://api.yelp.com/v3/businesses/search');

        jsonReq.onreadystatechange = function() {
            if (jsonReq.readyState !== 4 || jsonReq.status !== 200) return; 
            object = JSON.parse(jsonReq.responseText);
            callback(object);
        };

        jsonReq.send();
    };
}
