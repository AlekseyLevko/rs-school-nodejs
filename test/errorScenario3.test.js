const { spawn } = require("child_process");

test("User passes -i argument with path that doesn't exist or with no read access", (done) => {
  const cp = spawn("node", ["ciphering_cli.js", "-c", "C0", "-i", "./noExistingFile.txt", "-o", "./output.txt"]);

  const EXPECTED_OUTPUT_MESSAGE = `No access to the file specified in -i (--input). Check the value of the -i (--input) argument. The program terminated with an error code 5`;

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
