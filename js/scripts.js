// Co-authored by: Noah Cowan <nsncowan@gmail.com>
//PlaceList Logic

function PlaceList() {
  this.locations = {};
  this.currentId = 0;
}

PlaceList.prototype.addLocationName = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;
};

PlaceList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Location Logic

function Location(city, country, year, landmark, notes) {
  this.city = city;
  this.country = country;
  this.year = year;
  this.landmark = landmark;
  this.notes = notes;
}

Location.prototype.fullName = function() {
  return this.city + ", " + this.country;
};



// let testLocation = new Location("Kigali", "Rwanda", 2013, "", "");
// let testLocation2 = new Location("Tokyo", "Japan", 2017, "", "");
