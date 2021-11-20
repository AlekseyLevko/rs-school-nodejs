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

  const EXPECTED_OUTPUT = `Duplicates of the "-c" ("--config") flag were detected. The program terminated with an error code 2`;

  let output = "";

  cp.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  cp.stderr.on("end", () => {
    output = output.trim();
    expect(output).toBe(EXPECTED_OUTPUT);
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

  const EXPECTED_OUTPUT = `Duplicates of the "-i" ("--input") flag were detected. The program terminated with an error code 3`;

  let output = "";

  cp.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  cp.stderr.on("end", () => {
    output = output.trim();
    expect(output).toBe(EXPECTED_OUTPUT);
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

  const EXPECTED_OUTPUT = `Duplicates of the "-o" ("--output) flag were detected. The program terminated with an error code 4`;

  let output = "";

  cp.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  cp.stderr.on("end", () => {
    output = output.trim();
    expect(output).toBe(EXPECTED_OUTPUT);
    done();
  });
});
