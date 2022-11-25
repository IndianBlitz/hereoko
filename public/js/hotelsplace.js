const Hotels = [
    { 
    name: "Radisson Blu",
    lat:28.453274417560678,
    log:77.52859714599731,
    },
    {
    name: "Bhati Hotel",
    lat:28.4431619120645,
    log:77.58112552745656,
    },
    {
    name: "The Royals Hotel Inn",
    lat:28.485265823701514,
    log:77.51297596033449,
    },
    {
    name: "Savoy Suites",
    lat:28.469120428434497,
    log:77.50971439414981,
    },
    {
    name: "The Park Residency",
    lat:28.459954146030395,
    log:77.50339186186291,
    },
    {
    name: "Happy Palace Inn",
    lat:28.50235307880969,
    log:77.52931272996226,
    },
    {
    name: "Sunfort Hotel",
    lat:28.47730808003759,
    log:77.51317656041697,
    },
    {
    name: "Hotel Stiltstay",
    lat:28.50295649943883,
    log:77.52948439134039,
    },
    {
    name: "Hotel White House",
    lat:28.50054279621735,
    log:77.53240263476879,
    },
    {
    name: "Grand Heritage Resort",
    lat:28.48002408997708,
    log:77.52381956586173,
    },
    {
    name: "Atithi Suites",
    lat:28.480929411102768,
    log:77.4891439674772,
    },
    {
    name: "Hotel Voyages",
    lat:28.47942053824853,
    log:77.47644102549475,
    },
    {
    name: "Dwelling Residency",
    lat:28.457690379312407,
    log:77.5037351846192,
    },
    {
    name: "Hotel Grand",
    lat:28.46101055390768,
    log:77.50390684599734,
    },
    {
    name: "The Oro Homes",
    lat:28.479269649777468,
    log:77.53463423268462,
    },
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

    for(let i=0;i<Hotels.length;i++){
        
         var temp_places  = new H.map.Marker({ lat: Hotels[i].lat , lng: Hotels[i].log });
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


  
  