const people = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");
function getPeopleInCity(people) {
  return getFirstNames(people);
}

module.exports = getPeopleInCity;
