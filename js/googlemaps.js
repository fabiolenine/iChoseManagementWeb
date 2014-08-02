var myCenter=new google.maps.LatLng(53, -1.33);
var marker=new google.maps.Marker({
    position:myCenter
});

function initialize() {
  var mapProp = {
      center:myCenter,
      zoom: 14,
      draggable: false,
      scrollwheel: false,
      mapTypeId:google.maps.MapTypeId.SATELLITE
  };
  
  var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  marker.setMap(map);
    
  google.maps.event.addListener(marker, 'click', function() {
      
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
    
  }); 
};

$('.btnmap').click(function(){

  	initialize();

});

function loadScript() {
  var script = document.createElement("script");
  script.type   = "text/javascript";
  script.src    = "http://maps.googleapis.com/maps/api/js?key=AIzaSyB3g1x-yuUasJMAZ96tyi18_IUq99h_wRc&sensor=TRUE";
  document.body.appendChild(script);
}

window.onload = loadScript;