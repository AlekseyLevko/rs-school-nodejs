const { Transform } = require("stream");

class TransformStream extends Transform {
  constructor(cipher, shift, encoding) {
    super();
    this.cipher = cipher;
    this.shift = shift;
    this.encoding = encoding;
  }

  _transform = (chunk, encoding, callback) => {
    const string = chunk.toString();
    const transformString = this.transformAtbash(string);
    callback(null, transformString);
  };

  transformByShift = (str) => {
    const arr = str.split("");
    const shift = (this.encoding ? this.shift : -this.shift) % 26;
    let newArr = [];

    const getNewChar = (charCode, firstCharCode) => {
      return String.fromCodePoint(((charCode - firstCharCode + shift + 26) % 26) + firstCharCode);
    };

    arr.forEach((sym) => {
      const charCode = sym.codePointAt();
      if (charCode >= 65 && charCode <= 90) {
        newArr.push(getNewChar(charCode, 65));
      } else if (charCode >= 97 && charCode <= 122) {
        newArr.push(getNewChar(charCode, 97));
      } else {
        newArr.push(sym);
      }
    });
    return newArr.join("");
  };

  transformAtbash = (str) => {
    const arr = str.split("");
    let newArr = [];
    arr.forEach((sym) => {
      const charCode = sym.codePointAt();
      if (charCode >= 65 && charCode <= 90) {
        newArr.push(String.fromCodePoint(64 + 26 - (charCode - 64) + 1));
      } else if (charCode >= 97 && charCode <= 122) {
        newArr.push(String.fromCodePoint(96 + 26 - (charCode - 96) + 1));
      } else {
        newArr.push(sym);
      }
    });
    return newArr.join("");
  };
}

module.exports = TransformStream;
