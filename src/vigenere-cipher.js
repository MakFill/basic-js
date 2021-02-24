const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }
  encrypt(str, key) {
    // throw new CustomError('Not implemented');
    if (!str || !key) {
      throw new Error("Error");
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let code = [];
    const conKey = key;
    for (let i = 0; i < str.length; i++) {
      if (key.length < i + 1) {
        key += conKey;
      }
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        let p = str.charCodeAt(i) - "A".charCodeAt(0) + key.charCodeAt(i);
        if (p > 90) {
          p -= 26;
        }
        code.push(String.fromCharCode(p));
      } else {
        key = key.split("");
        key.splice(i, 0, " ");
        key = key.join("");
        code.push(str[i]);
      }
    }
    if (this.value === true || typeof this.value === "undefined") {
      return code.join("");
    } else if (this.value === false) {
      return code.reverse().join("");
    }
  }
  decrypt(code, key) {
    // throw new CustomError('Not implemented');
    if (!code || !key) {
      throw new Error("Error");
    }
    code = code.toUpperCase();
    key = key.toUpperCase();
    let str = [];
    const conKey = key;
    for (let i = 0; i < code.length; i++) {
      if (key.length < i + 1) {
        key += conKey;
      }
      if (code.charCodeAt(i) >= 65 && code.charCodeAt(i) <= 90) {
        let p = code.charCodeAt(i) - key.charCodeAt(i) + "A".charCodeAt(0);
        if (p < 65) {
          p += 26;
        }
        str.push(String.fromCharCode(p));
      } else {
        key = key.split("");
        key.splice(i, 0, " ");
        key = key.join("");
        str.push(code[i]);
      }
    }
    if (this.value === true || typeof this.value === "undefined") {
      return str.join("");
    } else if (this.value === false) {
      return str.reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
