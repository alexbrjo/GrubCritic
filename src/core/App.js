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
    
    this.list = document.getElementById('grub-wrapper');
    
    /** --------------- So Google key isn't stored in raw HTML -------------- */
    var gMaps = document.createElement('script');
    gMaps.type = 'text/javascript';
    gMaps.onload = this.loadMap;
    gMaps.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.keys.google_maps_key;
    document.head.appendChild(gMaps);
    /** --------------------------------------------------------------------- */
};

/**
 * Starts App and makes app non-global
 */
window.onload = function () {
    var app = new GrubCriticApp();
    window.searchSubmit = function () {
        console.log("submitted");
    };
};
