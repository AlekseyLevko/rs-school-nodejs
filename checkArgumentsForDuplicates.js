module.exports = () => {
  const count = (el, arr) => {
    return arr.filter((arrItem) => arrItem === el).length;
  };

  const args = process.argv.slice(2);

  if (count("-c", args) > 1) process.exit(1);
  if (count("-i", args) > 1) process.exit(2);
  if (count("-o", args) > 1) process.exit(3);
};
