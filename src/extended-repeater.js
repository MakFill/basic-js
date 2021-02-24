const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  if (str === null) {
    str = "null";
  }
  str.toString();
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  let string = [];
  string.push(str);
  if (options.addition || typeof options.addition === "boolean") {
    options.addition = options.addition.toString();
    string.push(options.addition);
  }
  if (options.addition === null) {
    options.addition = "null";
    string.push(options.addition);
  }
  if (
    options.additionRepeatTimes > 1 &&
    typeof options.additionRepeatTimes === "number"
  ) {
    let xxx = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      xxx = xxx.concat(string[1]);
    }
    string = string[0] + xxx.join(options.additionSeparator);
  } else {
    string = string.join("");
  }
  console.log(string);
  let newString = [string];
  let yyy = string;
  if (options.repeatTimes > 1 && typeof options.repeatTimes === "number") {
    for (let i = 1; i < options.repeatTimes; i++) {
      newString = newString.concat(yyy);
    }
  }
  newString = newString.join(options.separator);
  return newString;
};
