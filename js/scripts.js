//PlaceList Logic

function PlaceList() {
  this.locations = {};
}

PlaceList.prototype.addLocationName = function(location) {
  /*let placeName = location.id;
  return placeName; */
  this.locations[location.id] = location;
}

//Location Logic

function Location(city, country, year, landmark, notes) {
  this.city = city;
  this.country = country;
  this.year = year;
  this.landmark = landmark;
  this.notes = notes;
  this.id = city + ", " + country;
}

// let testLocation = new Location("Kigali", "Rwanda", 2013, "", "");
// let testLocation2 = new Location("Tokyo", "Japan", 2017, "", "")
