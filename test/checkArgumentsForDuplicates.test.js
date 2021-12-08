const checkArgumentsForDuplicates = require("../checkArgumentsForDuplicates");

test("callback function should not be called", () => {
  const mockCallback = jest.fn();

  checkArgumentsForDuplicates(["-c", "C1", "-i", "./input.txt"], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(0);
});

test("callback function must be called once with argument 2", () => {
  const mockCallback = jest.fn();

  checkArgumentsForDuplicates(["-c", "C0", "--config", "C1"], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(1);
  expect(mockCallback.mock.calls[0][0]).toBe(2);
});

test("callback function must be called once with argument 3", () => {
  const mockCallback = jest.fn();

  checkArgumentsForDuplicates(["-с", "C0", "-i", "./input.txt", "--input", "./input2.txt"], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(1);
  expect(mockCallback.mock.calls[0][0]).toBe(3);
});

test("callback function must be called once with argument 4", () => {
  const mockCallback = jest.fn();

  checkArgumentsForDuplicates(["-с", "C0", "-o", "./output.txt", "--output", "./output2.txt"], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(1);
  expect(mockCallback.mock.calls[0][0]).toBe(4);
});
