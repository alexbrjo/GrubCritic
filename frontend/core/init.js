/**
 * Starts App and makes app non-global
 */
window.onload = function () {
    var app = new GrubCriticApp();
    
    navigator.geolocation.getCurrentPosition(function (p) {
        app.query.setCoords(p.coords.latitude, p.coords.longitude);
        app.query.send(app);
    });
    
    window.searchSubmit = function () {
        app.query.setLocation(document.getElementById("search-input").value);
        app.query.send(app);
    };
    
    document.getElementById("next").onclick = function() {
        app.scroll();
    };
};