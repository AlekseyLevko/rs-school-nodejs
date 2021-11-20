const { spawn } = require("child_process");

test(`user passes the same "-c" ("--config) cli argument twice`, (done) => {
  const cp = spawn("node", [
    "ciphering_cli.js",
    "-c",
    "C1-C1-A-R0",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
    "--config",
    "C1"
  ]);

  const EXPECTED_OUTPUT_MESSAGE = `Duplicates of the "-c" ("--config") flag were detected. The program terminated with an error code 2`;

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

test(`user passes the same "-i" ("--input) cli argument twice`, (done) => {
  const cp = spawn("node", [
    "ciphering_cli.js",
    "-c",
    "C1-C1-A-R0",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
    "--input",
    "./input.txt"
  ]);

  const EXPECTED_OUTPUT_MESSAGE = `Duplicates of the "-i" ("--input") flag were detected. The program terminated with an error code 3`;

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

test(`user passes the same "-o" ("--output) cli argument twice`, (done) => {
  const cp = spawn("node", [
    "ciphering_cli.js",
    "-c",
    "C1-C1-A-R0",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
    "--output",
    "./output.txt"
  ]);

  const EXPECTED_OUTPUT_MESSAGE = `Duplicates of the "-o" ("--output) flag were detected. The program terminated with an error code 4`;

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
