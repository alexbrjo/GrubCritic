/**
 * The root of the application. Does some checks to make sure resources exist
 * and are working.
 */
function GrubCriticApp () {
    if (this.keys.google_maps_key === "key") {
        throw "Critical: no Google Maps api key";
    }
    if (this.keys.yelp_fusion_app_id === "id" || 
            this.keys.yelp_fusion_app_secret === "secret" ) {
        throw "Critical: no Yelp Fusion id or auth";
    }
    
    this.list = document.getElementById('spot-wrapper');
    this.queryList;
    this.query = new QueryBuilder();
    /** --------------- So Google key isn't stored in raw HTML -------------- */
    var gMaps = document.createElement('script');
    gMaps.type = 'text/javascript';
    gMaps.onload = this.loadMap;
    gMaps.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.keys.google_maps_key;
    document.head.appendChild(gMaps);
    /** ---------------------------------------------------------------------- */
    
    this.parseResponse = function (resp) {
        var center = resp.region.center;
        map.panTo(new google.maps.LatLng(center.latitude, center.longitude));
        this.queryList = resp.businesses;
        for (var i = 0; i < this.queryList.length; i++) {
            var spot = this.queryList[i];
            spot.grade = 0.8 * (spot.rating / 4.5) + 0.2 * (1 - (spot.price.length / 5));
        }
        
        this.queryList.sort(function(a, b) {
            if (a.grade < b.grade) return 1;
            else if (a.grade > b.grade) return -1;
            else return 0;
        });
        
        this.list.innerHTML = "";
        for (var j = 0; j < this.queryList.length; j++) {
            this.parse(this.queryList[j]);
        }
    };
};

/**
 * Starts App and makes app non-global
 */
window.onload = function () {
    var app = new GrubCriticApp();
        
    navigator.geolocation.getCurrentPosition(function (p) {
        app.query.setCoords(p.coords.latitude, p.coords.longitude);
        app.query.send(app);
        var origin = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        map.panTo(origin);
    });
    
    window.searchSubmit = function () {
        app.query.setLocation(document.getElementById("search-input").value);
        app.query.send(app);
    };
};
