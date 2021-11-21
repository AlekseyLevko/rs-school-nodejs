const { Transform } = require("stream");
const transformByShift = require("./transformByShift");
const transformAtbash = require("./transformAtbash");

class TransformStream extends Transform {
  constructor(cipher, shift, encoding) {
    super();
    this.cipher = cipher;
    this.shift = shift;
    this.encoding = encoding;
  }

  _transform = (chunk, encoding, callback) => {
    const string = chunk.toString();
    let transformString;
    if (this.cipher === "C" || this.cipher === "R")
      transformString = this.transformByShift(string, this.encoding, this.shift);
    if (this.cipher === "A") transformString = this.transformAtbash(string);
    callback(null, transformString);
  };

  transformByShift = transformByShift;

  transformAtbash = transformAtbash;
}

module.exports = TransformStream;
