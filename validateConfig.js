module.exports = (config) => {
  const ciphers = config.split("-");
  availableCiphers = ["C0", "C1", "R0", "R1", "A"];
  ciphers.forEach((cipher) => {
    if (!availableCiphers.includes(cipher)) {
      process.exit(4);
    }
  });
};
