module.exports = function () {
    const init = function () {
        const mapOptions = {
            zoom: 13,
            disableDefaultUI: false,
            mapTypeControl: false,
            scrollwheel: false,

            center: new google.maps.LatLng(57.624523, 39.885989),

            styles: [{
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#444444' }],
            }, {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{ color: '#f2f2f2' }],
            }, { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'off' }] }, {
                featureType: 'road',
                elementType: 'all',
                stylers: [{ saturation: -100 }, { lightness: 45 }],
            }, {
                featureType: 'road.highway',
                elementType: 'all',
                stylers: [{ visibility: 'simplified' }],
            }, {
                featureType: 'road.arterial',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }],
            }, {
                featureType: 'transit',
                elementType: 'all',
                stylers: [{ visibility: 'off' }],
            }, {
                featureType: 'water',
                elementType: 'all',
                stylers: [{ color: '#00BFA5' }, { visibility: 'on' }],
            }],
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        const mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        const map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        const image = 'assets/img/sprite.svg#map_marker';
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(57.624523, 39.885989),
            map,
            title: 'Snazzy!',
            icon: image,
        });
    };

    google.maps.event.addDomListener(window, 'load', init);
};
