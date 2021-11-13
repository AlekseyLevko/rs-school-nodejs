module.exports = (config) => {
  if (!config) process.exit(10);

  const ciphers = config.split("-");

  // variant1 (detailed validation):
  ciphers.forEach((cipher) => {
    const X = cipher[0];
    const Y = cipher.slice(1);
    ["C", "R", "A"].includes(X) || process.exit(11);
    ["C", "R"].includes(X) && !["0", "1"].includes(Y) && process.exit(12);
    X === "A" && Y && process.exit(13);
  });

  // variant 2 (simplified validation):
  availableCiphers = ["C0", "C1", "R0", "R1", "A"];
  ciphers.forEach((cipher) => {
    if (!availableCiphers.includes(cipher)) {
      process.exit(10);
    }
  });
};
