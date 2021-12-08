const transformByAtbash = require("../transformAtbash");

test(`should be "Hvxivg nvhhztv!!!"`, () => {
  expect(transformByAtbash("Secret message!!!")).toBe("Hvxivg nvhhztv!!!");
});

test(`should be "Dszg rh blfi mznv?"`, () => {
  expect(transformByAtbash("What is your name?")).toBe("Dszg rh blfi mznv?");
});

test(`should be "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba"`, () => {
  expect(transformByAtbash("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")).toBe(
    "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba"
  );
});
