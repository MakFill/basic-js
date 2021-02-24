const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix = 0) {
  // throw new CustomError("Not implemented");

  let count = 0;
  matrix.forEach(function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "^^") {
        count++;
      }
    }
  });

  return count;
};
