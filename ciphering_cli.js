const { stdout, stderr } = process;
const fs = require("fs");
const { pipeline } = require("stream");
const WritableStream = require("./writableStream");
const ReadableStream = require("./readableStream");
const TransformStream = require("./transformStream");

const getValueByFlag = require("./getValueByFlag.js");
const validateConfig = require("./validateConfig");
const checkArgumentsForDuplicates = require("./checkArgumentsForDuplicates");

process.on("exit", (code) => {
  switch (code) {
    case 0:
      stdout.write("Процесс завершен успешно!");
      break;
    case 1:
      stderr.write(`Обнаружены дубликаты флага "-c". Программа завершилась с кодом ${code}`);
      break;
    case 2:
      stderr.write(`Обнаружены дубликаты флага "-i". Программа завершилась с кодом ${code}`);
      break;
    case 3:
      stderr.write(`Обнаружены дубликаты флага "-o". Программа завершилась с кодом ${code}`);
      break;
    case 4:
      stderr.write(`Конфиг не валиден либо отсутствует. Программа завершилась с кодом ${code}`);
      break;

    default:
      stderr.write(`Программа завершилась с ошибкой. Код ошибки - ${code}`);
  }
});

checkArgumentsForDuplicates();

const config = getValueByFlag("-c");
validateConfig(config);
const inputFilePath = getValueByFlag("-i");
const outputFilePath = getValueByFlag("-o");

const createTransformStreams = (config) => {
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

const readableStream = fs.createReadStream(inputFilePath, "utf-8");
readableStream.on("error", (error) => {
  console.log("Error", error.message);
  process.exit(4);
});

const transformStreams = createTransformStreams(config);

const writableStream = fs.createWriteStream(outputFilePath);
writableStream.on("error", (error) => {
  console.log("Error", error.message);
  process.exit(5);
});

pipeline(readableStream, ...transformStreams, writableStream, (err) => {
  if (err) {
    console.log(err.message);
  }
});
