const DineInn = [
	{
		name:"Raja Dhaba",
		lat:28.449457850366663,
		log:77.58380081111534,
	},
	{
		name:"King’s Bar & Pub",
		lat:28.45079735582825,
		log:77.58039977006092,
	},
	{
		name:"Jassi Da Dhaba",
		lat:28.45192931904615,
		log:77.57825400283416,
	},
	{
		name:"Ekta Dhaba",
		lat:28.448325860639628,
		log:77.58902575429298,
	},
	{
		name:"Food Town",
		lat:28.444231730138796,
		log:77.58804943020985,
	},
	{
		name:"Dilli Lazeez",
		lat:28.45278251923468,
		log:77.57909118820447,
	},
	{
		name:"The New Royal Chinese Fast Food",
		lat:28.452412392348982,
		log:77.57924345608706,
	},
	{
		name:"Maharaja Dhaba",
		lat:28.45488650367673,
		log:77.58068084846063,
	},
	{
		name:"Dostana Restaurant",
		lat:28.4525363406776,
		log:77.5757588144399,
	},
	{
		name:"Radha Rani Food Service",
		lat:28.457673330026896,
		log:77.58010812876809,
	},
	{
		name:"Saurabh Fast Food",
		lat:28.44011556055206,
		log:77.58486533515592,
	},
	{
		name:"Bhati Hotel",
		lat:28.44003449299218,
		log:77.58197044599804,
	},
	{
		name:"Jai Baba Mohan Ram",
		lat:28.438283418514626,
		log:77.58724393834306,
	},
	{
		name:"Kill Humger",
		lat:28.433582706621955,
		log:77.5779454290141,
	},
	{
		name:"Yummy Restaurant",
		lat:28.44889246220195,
		log:77.5689806867847,
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

  for(let i=0;i<DineInn.length;i++){
      
       var temp_places  = new H.map.Marker({ lat: DineInn[i].lat , lng: DineInn[i].log });
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



