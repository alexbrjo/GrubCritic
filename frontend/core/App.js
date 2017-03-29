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
    
    /*********************************************************************\
     *                                                                   *
     *               Important Application state variables               *
     *                                                                   *
    \*********************************************************************/
    this.list = document.getElementById('spot-wrapper');
    var self = this;
    this.marker;
    this.queryList;
    this.query = new QueryBuilder();
    this.map;
    this.origin;
    
    /*********************************************************************\
     *                                                                   *
     *               So Google key isn't stored in raw HTML              *
     *                                                                   *
    \*********************************************************************/
    var gMaps = document.createElement('script');
    gMaps.type = 'text/javascript';
    gMaps.onload = function () { self.loadMap(); };
    gMaps.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.keys.google_maps_key;
    document.head.appendChild(gMaps);
    
    /*********************************************************************\
     *                                                                   *
     *               Input handlers, manipulate the list                 *
     *                                                                   *
    \*********************************************************************/
 
    /**
     * Scrolls the list down by one
     */
    this.scroll = function () {
        this.list.append(this.list.children[0]); // throw to end of list
        this.queryList.push(this.queryList.splice(0, 1)[0]);
        var spot = this.queryList[0]; // hooked yelpData from parse
        var loc = spot.coordinates;
        this.origin = {lat: loc.latitude, lng: loc.longitude};
        this.marker.setPosition(this.origin);
        this.map.panTo(this.origin);
        
        document.getElementById("recommedation").innerHTML = this.list.children[0].innerHTML;
        document.getElementById("link").href = spot.url;
    };
    
    /*********************************************************************\
     *                                                                   *
     *               Parses the API response from Yelp                   *
     *                                                                   *
    \*********************************************************************/
    this.parseResponse = function (resp) {
        var center = resp.region.center;
        this.map.panTo(new google.maps.LatLng(center.latitude, center.longitude));
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
        
        if (!this.marker) { // init marker
            var loc = this.queryList[0].coordinates;
            this.origin = {lat: loc.latitude, lng: loc.longitude};
            this.marker = new google.maps.Marker({
                position: this.origin,
                map: this.map
              });
        }
        this.scroll();
    };
};
