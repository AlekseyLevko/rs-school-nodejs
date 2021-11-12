const { Writable } = require("stream");

class WritableStream extends Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {}
}

module.exports = WritableStream;
