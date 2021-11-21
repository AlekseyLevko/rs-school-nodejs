const TransformStream = require("./transformStream");

module.exports = (config) => {
  const streams = [];
  const streamConfigs = config.split("-");
  streamConfigs.forEach((streamConfig) => {
    const cipher = streamConfig[0];
    const encoding = Number(streamConfig[1]);
    let shift;
    if (cipher === "C") shift = 1;
    if (cipher === "R") shift = 8;
    streams.push(new TransformStream(cipher, shift, encoding));
  });
  return streams;
};
