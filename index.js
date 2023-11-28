const peopleArray = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleArray) => {
  return getFirstNames(peopleArray);
};
module.exports = getPeopleInCity;
