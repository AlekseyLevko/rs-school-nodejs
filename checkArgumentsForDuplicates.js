const countElementsInArray = require("./countElementsInArray");

module.exports = (args, callback) => {
  if (countElementsInArray(["-c", "--config"], args) > 1) callback(2);
  if (countElementsInArray(["-i", "--input"], args) > 1) callback(3);
  if (countElementsInArray(["-o", "--output"], args) > 1) callback(4);
};
