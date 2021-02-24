const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');

  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (date.hasOwnProperty("getMonth")) {
    throw new Error("Error");
  }
  try {
    date.getMonth();
  } catch (e) {
    if (e instanceof TypeError) {
      throw new Error("Error");
    }
  }

  let month = date.getMonth();

  if (month == 11 || month == 0 || month == 1) {
    return "winter";
  }
  if (month >= 2 && month <= 4) {
    return "spring";
  }
  if (month >= 5 && month <= 7) {
    return "summer";
  }
  if (month >= 8 && month <= 10) {
    return "fall";
  }
};
