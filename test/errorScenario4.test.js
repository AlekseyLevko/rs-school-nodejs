const { spawn } = require("child_process");

test("user passes -o argument with path to directory that doesn't exist or with no read access", (done) => {
  const cp = spawn("node", ["ciphering_cli.js", "-c", "C0", "-i", "./input.txt", "-o", "./noExistingFile.txt"]);

  const EXPECTED_OUTPUT_MESSAGE = `No access to the file specified in -o (--output). Check the value of the -o (--output) argument. The program terminated with an error code 6`;

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
