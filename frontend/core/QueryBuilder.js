/**
 * Starts building a search query as data is inputted
 */
function QueryBuilder() {
    var coords = null;
    var location = null;
    var distance = 40000;
    var use_loc = false;
    
    this.closer = function () {  };
    this.cheaper = function () {};
    this.setCoords = function (a, b) { 
        coords = {latitude: a, longitude: b}; 
        use_loc = false; 
    };
    
    this.setLocation = function (x) {
        if (x !== null && typeof x === "string" && x.length > 0) { 
            location = x; 
            use_loc = true;
        } 
    };
            
    var last = "";
    this.send = function (app) {
        var jsonReq = new XMLHttpRequest();
        var queryString = 'https://alexjo.co/flask/business?term=food&';
        if (!use_loc) {
            queryString += "lat=" + coords.latitude + "&";
            queryString += "lng=" + coords.longitude + "&";
        } else {
            queryString += "location=" + location + "&";
        }
        
        if (distance !== null)  queryString += "radius=" + distance + "&";
        
        if (last === queryString) return;
        else last = queryString;
        
        jsonReq.open('GET', queryString);
        jsonReq.onreadystatechange = function() {
            if (jsonReq.readyState !== 4 || jsonReq.status !== 200) return; 
            app.parseResponse(JSON.parse(jsonReq.responseText));
        };
        jsonReq.send();
    };
}
