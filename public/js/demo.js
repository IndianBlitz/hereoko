const Places = [
    {
        name:"Bennett University",
        lat:28.45076398954239,
        log:77.58414410431797,

    },
    {
        name:"The Grand Venice Mall",
        lat:28.45615678012625,
        log:77.5269980459973,
    },
    {
        name:"TEDx",
        lat:28.45857149793289,
        log:77.50416708270454,
    },
    {
        name:"Boomarang ",
        lat:28.468229817540443,
        log:77.5215048818968,
    },
    {
        name:"Birondi Village",
        lat: 28.481961220789504,
        log:77.54210424727376,
    },
    {
        name:"Samrat Mihir Bhoj Park",
        lat:28.477887254412213,
        log:77.52081823638423,
    },
    {
        name:"B-2 Park",
        lat:28.476378338096996,
        log:77.5568671257939,
    }, 

    {
        
    }
]

















var latitude = 0,longitude = 0;

var x=document.getElementById("demo");



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

}
function showPosition(position) {
  
    latitude = position.coords.latitude;
   
    longitude = position.coords.longitude;

    moveMapToUser(map)
}



getLocation();

/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {

    for(let i=0;i<Places.length;i++){
        
         var temp_places  = new H.map.Marker({ lat: Places[i].lat , lng: Places[i].log });
         map.addObject(temp_places);
    }
    

//   var parisMarker = new H.map.Marker({ lat: 48.8567, lng: 2.3508 });
//   map.addObject(parisMarker);

//   var romeMarker = new H.map.Marker({ lat: 41.9, lng: 12.5 });
//   map.addObject(romeMarker);

//   var berlinMarker = new H.map.Marker({ lat: 52.5166, lng: 13.3833 });
//   map.addObject(berlinMarker);

//   var madridMarker = new H.map.Marker({ lat: 40.4, lng: -3.6833 });
//   map.addObject(madridMarker);

//   var londonMarker = new H.map.Marker({ lat: 51.5008, lng: -0.1224 });
//   map.addObject(londonMarker);
}



function addCircleToMap(map){
  map.addObject(new H.map.Circle(
    // The central point of the circle
    {lat:latitude, lng:longitude},
    // The radius of the circle in meters
    5000,
    {
      style: {
        strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
        lineWidth: 2,
        fillColor: 'rgba(0, 128, 0, 0.7)'  // Color of the circle
      }
    }
  ));
}


var platform = new H.service.Platform({
  apikey: "zai6zXtopj5G9qXDEs_c6Yw3nLx-mJ_9lfOADjmWyVs",
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(
  document.getElementById("map"),
  defaultLayers.vector.normal.map,
  {
    center: { lat: latitude , lng: longitude },
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1,
  }
);

window.addEventListener("resize", () => map.getViewPort().resize());


var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


var ui = H.ui.UI.createDefault(map, defaultLayers);


window.onload = function () {
  addMarkersToMap(map);
};

addCircleToMap(map)

function moveMapToUser(map){
    map.setCenter({lat:latitude, lng:longitude});
    var myLocation = new H.map.Marker({ lat: latitude, lng: longitude });
    map.addObject(myLocation);
    addCircleToMap(map)
    
  }


  
  