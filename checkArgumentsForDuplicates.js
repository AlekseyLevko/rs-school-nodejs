const countElementsInArray = require("./countElementsInArray");

module.exports = (args) => {
  if (countElementsInArray(["-c", "--config"], args) > 1) process.exit(2);
  if (countElementsInArray(["-i", "--input"], args) > 1) process.exit(3);
  if (countElementsInArray(["-o", "--output"], args) > 1) process.exit(4);
};
