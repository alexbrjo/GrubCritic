/**
 * Using you're Google Maps key loads a map with custom style and control
 * settings. Uses DC as the default.
 * 
 * Responsibilites:
 *  - Load map using API
 *  - style map
 *  Posible security threat: map is global
 * 
 */
var map;
GrubCriticApp.prototype.loadMap = function() {
    map = new google.maps.Map(document.getElementById('grub-map'), {
        zoom: 11,
        center: {lat: 38.899265, lng: -77.1546508},
        streetViewControl: false,
        disableDefaultUI: true,
        mapTypeControl: false,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE
        },
        /** Stay close to Google Map color scheme but enough flavor that it's noticiable */
        styles: [
            /** -------------- Global settings --------------  */
            { elementType: 'geometry',  stylers: [{color: '#EDE1D1'}]},
            { elementType: 'labels.text.fill',  stylers: [{color: '#000000'}]},
            { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{color: '#000000'}] },

            /** -------------- Points of intests --------------  */
            { featureType: 'poi',       elementType: 'labels.text.fill',    stylers: [{color: '#BBBBBB'}] },
            { featureType: 'poi.park',  elementType: 'geometry',            stylers: [{color: '#A7D9A3'}] },
            { featureType: 'poi.park',  elementType: 'labels.text.fill',    stylers: [{color: '#6DC066'}] },

            /** -------------- Roads/Highways --------------  */
            { featureType: 'road',          elementType: 'geometry',    stylers: [{color: '#FEFAFD'}] },
            { featureType: 'road.highway',  elementType: 'geometry',    stylers: [{color: '#D8BE7E'}] },

            /** -------------- Airports / Train Stations --------------  */
            { featureType: 'transit',           elementType: 'geometry',           stylers: [{color: '#E1E1E1'}] },

            /** -------------- Bodies of Water --------------  */
            { featureType: 'water',     elementType: 'geometry',            stylers: [{color: '#6BAAE7'}] },
            { featureType: 'water',     elementType: 'labels.text.fill',    stylers: [{color: '#515c6d'}] },
            { featureType: 'water',     elementType: 'labels.text.stroke',  stylers: [{color: '#17263c'}]}
        ]
    });
};
