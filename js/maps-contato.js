function initialize() {
  var fenway = new google.maps.LatLng(42.345573,-71.098326);

  // Note: constructed panorama objects have visible: true
  // set by default.
  var panoOptions = {
    position: fenway,
    addressControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    linksControl: false,
    panControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    enableCloseButton: false,
    disableDefaultUI: true,
  };

  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('map-canvas'), panoOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
