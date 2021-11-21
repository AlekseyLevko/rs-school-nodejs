module.exports = (str, enc, shi) => {
  const arr = str.split("");
  const shift = (enc ? shi : -shi) % 26;
  let newArr = [];

  const getNewChar = (charCode, firstCharCode) => {
    return String.fromCodePoint(((charCode - firstCharCode + shift + 26) % 26) + firstCharCode);
  };

  arr.forEach((sym) => {
    const charCode = sym.codePointAt();
    if (charCode >= 65 && charCode <= 90) {
      newArr.push(getNewChar(charCode, 65));
    } else if (charCode >= 97 && charCode <= 122) {
      newArr.push(getNewChar(charCode, 97));
    } else {
      newArr.push(sym);
    }
  });
  return newArr.join("");
};
