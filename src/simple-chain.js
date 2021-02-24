const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  getLength() {
    // throw new CustomError('Not implemented');
    let x = this.str.slice();
    this.str.length = 0;
    return x.length;
  },
  addLink(value = "") {
    // throw new CustomError('Not implemented');
    let r = this.str.slice();
    let val = value;

    this.str.push(`( ${val} )`);
    return this;

    // return chainMaker.str;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    if (
      typeof position !== "number" ||
      position - 1 > this.str.length ||
      position < 0 ||
      !Number.isInteger(position)
    ) {
      this.str.length = 0;
      throw new Error("Error");
    }
    this.str.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    this.str.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    let x = this.str.slice();
    this.str.length = 0;
    return x.join("~~");
  },
};

module.exports = chainMaker;
