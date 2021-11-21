module.exports = (flag) => {
  const flagInd = process.argv.indexOf(flag);
  return flagInd !== -1 ? process.argv[flagInd + 1] : null;
};
