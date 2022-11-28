// Co-authored by: Noah Cowan <nsncowan@gmail.com>
//PlaceList Logic

function PlaceList() {
  this.places = {};
  this.currentId = 0;
}

PlaceList.prototype.addPlaceName = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlaceList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PlaceList.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

//Place Logic

function Place(city, country, year, landmark, notes) {
  this.city = city;
  this.country = country;
  this.year = year;
  this.landmark = landmark;
  this.notes = notes;
}

Place.prototype.fullName = function() {
  return this.city + ", " + this.country;
};
// let testPlace = new Place("Kigali", "Rwanda", 2013, "", "");
// let testPlace2 = new Place("Tokyo", "Japan", 2017, "", "");

//UI Logic

let placeList = new PlaceList();

function listPlaces(placeListToDisplay) {
  let placesDiv = document.querySelector("div#places");
  placesDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(placeListToDisplay.places).forEach(function(key) {
    const place = placeListToDisplay.findPlace(key);
    const li = document.createElement("li");
    li.append(place.fullName());
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  placesDiv.append(ul);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedCity = document.querySelector("input#new-city").value;
  const inputtedCountry = document.querySelector("input#new-country").value;
  const inputtedYear = document.querySelector("input#new-year").value;
  const inputtedLandmark = document.querySelector("input#new-landmark").value;
  const inputtedNotes = document.querySelector("input#new-notes").value;
  let newPlace = new Place(inputtedCity, inputtedCountry, inputtedYear, inputtedLandmark, inputtedNotes);
  placeList.addPlaceName(newPlace);
  listPlaces(placeList);
}

window.addEventListener("load", function (){
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
});
