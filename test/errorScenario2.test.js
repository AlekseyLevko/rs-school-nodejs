const { spawn } = require("child_process");

test("user doesn't pass -c or --config argument", (done) => {
  const cp = spawn("node", ["ciphering_cli.js", "-i", "./input.txt", "-o", "./output.txt"]);

  const EXPECTED_OUTPUT_MESSAGE = `The config is not valid or missing. Check the value of the -c (--config) argument.The program terminated with an error code 10`;

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
