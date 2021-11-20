const { stdin, stdout } = process;
const { createReadStream, createWriteStream, accessSync, constants } = require("fs");
const { pipeline } = require("stream");
const getValueByFlag = require("./getValueByFlag.js");
const validateConfig = require("./validateConfig");
const checkArgumentsForDuplicates = require("./checkArgumentsForDuplicates");
const processOn = require("./processOn");
const createTransformStreams = require("./createTransformStreams");

processOn();

checkArgumentsForDuplicates(process.argv.slice(2));

const config = getValueByFlag("-c") || getValueByFlag("--config");

validateConfig(config);

const inputFilePath = getValueByFlag("-i") || getValueByFlag("--input");

if (inputFilePath) {
  try {
    accessSync(inputFilePath, constants.R_OK);
  } catch (err) {
    process.exit(5);
  }
}

//Checking file access in synchronous mode so that createWriteStream does not create the file itself
const outputFilePath = getValueByFlag("-o") || getValueByFlag("--output");

if (outputFilePath) {
  try {
    accessSync(outputFilePath, constants.W_OK);
  } catch (err) {
    process.exit(6);
  }
}

const readableStream = inputFilePath ? createReadStream(inputFilePath, "utf-8") : stdin;

readableStream.on("error", (error) => {
  console.log("Error", error.message);
  process.exit(21);
});

const transformStreams = createTransformStreams(config);

const writableStream = outputFilePath
  ? createWriteStream(outputFilePath, {
      flags: "a"
    })
  : stdout;

writableStream.on("error", (error) => {
  console.log("Error", error.message);
  process.exit(22);
});

pipeline(readableStream, ...transformStreams, writableStream, (err) => {
  if (err) {
    console.log(err.message);
    process.exit(23);
  }
});
