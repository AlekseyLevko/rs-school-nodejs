module.exports = (str) => {
  const arr = str.split("");
  let newArr = [];
  arr.forEach((sym) => {
    const charCode = sym.codePointAt();
    if (charCode >= 65 && charCode <= 90) {
      newArr.push(String.fromCodePoint(64 + 26 - (charCode - 64) + 1));
    } else if (charCode >= 97 && charCode <= 122) {
      newArr.push(String.fromCodePoint(96 + 26 - (charCode - 96) + 1));
    } else {
      newArr.push(sym);
    }
  });
  return newArr.join("");
};
