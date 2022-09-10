// Mod 13.2.4

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

//  Add a marker to the map for Los Angeles, California.
// The radius for the circle() function is measured in meters.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// var circle = 
// L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#FFD326',
//     fillOpacity: 0.25,
//     radius: 300
// }).addTo(map);

// Add a circle to the map
// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#FFD326',
//     fillOpacity: 0.25,
//     radius: 100
// }).addTo(map);


// Mapping_Multiple_Points
// Mod 13.4.2

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
// ////// In JavaScript, toLocaleString() is a Number method that is used to convert a number into a locale-specific numeric representation of the number (rounding the result where necessary) and return its value as a string. Because toLocaleString() is a method of the Number object, it must be invoked through a particular instance of the Number class.
// ////// https://www.techonthenet.com/js/number_tolocalestring.php
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        color: 'orange',
        fillColor: 'orange',
        weight: 4,
        fillOpacity: 0.25,
        radius: city.population/200000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});




// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11
// https://docs.mapbox.com/api/maps/styles/#mapbox-styles

// To use the Mapbox Styles API, edit the URL in the Leaflet tilelayer()method, as detailed on the Leaflet website:

// First, navigate to the Mapbox Glossary (Links to an external site.).
// Search the Static Tiles API (Links to an external site.).
// Copy this part of the URL: https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/.
// In your tileLayer() code, replace this part of the URL, https://api.tiles.mapbox.com/v4/{id}/, with the Mapbox Styles API URL you copied.
// Remove the .png from the URL.
// Remove the id attribute and the map style reference.
// The code for the tileLayer() should look like the following:



