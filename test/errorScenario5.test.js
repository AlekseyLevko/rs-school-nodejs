const { spawn } = require("child_process");

describe("User passes incorrent symbols in argument for --config", () => {
  test("User passes incorrect symbols X in argument for --config", (done) => {
    const cp = spawn("node", ["ciphering_cli.js", "-c", "C1-T", "-i", "./input.txt", "-o", "./output.txt"]);

    const EXPECTED_OUTPUT_MESSAGE = `Config should be in format {XY(-)}n. Valid values for X: "C", "R", "A". The program terminated with an error code 11`;

    let errorMessage = "";

    cp.stderr.on("data", (chunk) => {
      errorMessage += chunk.toString();
    });

    cp.stderr.on("end", () => {
      errorMessage = errorMessage.trim();
      expect(errorMessage).toBe(EXPECTED_OUTPUT_MESSAGE);
      done();
    });
  });

  test("User passes incorrect symbols Y in argument for --config", (done) => {
    const cp = spawn("node", ["ciphering_cli.js", "-c", "C1-C2", "-i", "./input.txt", "-o", "./output.txt"]);

    const EXPECTED_OUTPUT_MESSAGE = `Config should be in format {XY(-)}n. When X is equal to "C" or "R", Y should be "0" or "1". The program terminated with an error code 12`;

    let errorMessage = "";

    cp.stderr.on("data", (chunk) => {
      errorMessage += chunk.toString();
    });

    cp.stderr.on("end", () => {
      errorMessage = errorMessage.trim();
      expect(errorMessage).toBe(EXPECTED_OUTPUT_MESSAGE);
      done();
    });
  });

  test("User passes symbols Y for Atbash cipher for --config", (done) => {
    const cp = spawn("node", ["ciphering_cli.js", "-c", "C0-A1", "-i", "./input.txt", "-o", "./output.txt"]);

    const EXPECTED_OUTPUT_MESSAGE = `Config must have the format {XY(-)}n. If X is equal to "A" (Atbash cipher), the value of Y should be omitted. The program terminated with an error code 13`;

    let errorMessage = "";

    cp.stderr.on("data", (chunk) => {
      errorMessage += chunk.toString();
    });

    cp.stderr.on("end", () => {
      errorMessage = errorMessage.trim();
      expect(errorMessage).toBe(EXPECTED_OUTPUT_MESSAGE);
      done();
    });
  });
});
