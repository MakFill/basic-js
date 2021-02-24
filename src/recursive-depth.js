const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    if (!Array.isArray(arr)) {
      return 1;
    }

    let stack = 1;

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        let depth = this.calculateDepth(el) + 1;
        if (depth > stack) {
          stack = depth;
        }
      }
    });
    return stack;
  }
};
