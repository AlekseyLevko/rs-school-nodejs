const { spawn } = require("child_process");

test("User passes correct sequence of symbols as argument for --config", (done) => {
  const cp = spawn("node", ["ciphering_cli.js", "-c", "C0", "-i", "./input.txt", "-o", "./output.txt"]);

  const EXPECTED_OUTPUT_MESSAGE = "Process completed successfully!";

  let successMessage = "";

  cp.stdout.on("data", (chunk) => {
    successMessage += chunk.toString();
  });

  cp.stdout.on("end", () => {
    successMessage = successMessage.trim();
    expect(successMessage).toBe(EXPECTED_OUTPUT_MESSAGE);
    done();
  });
});
