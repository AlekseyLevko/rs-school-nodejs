module.exports = () => {
  const count = (elements, args) => {
    return args.filter((arg) => elements.includes(arg)).length;
  };

  const args = process.argv.slice(2);

  if (count(["-c", "--config"], args) > 1) process.exit(2);
  if (count(["-i", "--input"], args) > 1) process.exit(3);
  if (count(["-o", "--output"], args) > 1) process.exit(4);
};
