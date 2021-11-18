const countElementsInArray = require("../countElementsInArray");

test("result should be 1", () => {
  expect(countElementsInArray(["-c", "--config"], ["-c"])).toBe(1);
});

test("result should be 5", () => {
  expect(
    countElementsInArray(["-c", "--config", "--input"], ["-c", "other", "--input", "-c", "--config", "--input"])
  ).toBe(5);
});

test("result should be 3", () => {
  expect(countElementsInArray(["-i", "--input", "-o"], ["-i", "-i", "-c", "-o", "--noInput"])).toBe(3);
});

test(`argument "elements" should be an array`, () => {
  expect(() => countElementsInArray("notArray", [])).toThrow(`argument "elements" should be an array`);
});

test(`argument "array" should be an array`, () => {
  expect(() => countElementsInArray([], "notArray")).toThrow(`argument "array" should be an array`);
});
