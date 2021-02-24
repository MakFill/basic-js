const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError("Not implemented");
  if (
    typeof sampleActivity == "string" &&
    !isNaN(+sampleActivity) &&
    +sampleActivity > 0 &&
    +sampleActivity <= 15
  ) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivity) /
        (Math.log(2) / HALF_LIFE_PERIOD)
    );
  } else {
    return false;
  }
};
