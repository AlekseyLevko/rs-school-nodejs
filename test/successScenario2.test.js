const { spawn } = require("child_process");

describe("Test cipher usage scenarios from first task description usage examples", () => {
  test("C1-C1-R0-A cipher", (done) => {
    const cp = spawn("node", ["ciphering_cli.js", "-c", "C1-C1-R0-A"]);

    const EXPECTED_OUTPUT = `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`;

    cp.stdin.write(`This is secret. Message about "_" symbol!`);
    cp.stdin.end();

    cp.stdout.on("data", (chunk) => {
      expect(chunk.toString()).toBe(EXPECTED_OUTPUT);
      done();
    });
  });

  test("C1-C0-A-R1-R0-A-R0-R0-C1-A cipher", (done) => {
    const cp = spawn("node", ["ciphering_cli.js", "-c", "C1-C0-A-R1-R0-A-R0-R0-C1-A"]);

    const EXPECTED_OUTPUT = `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`;

    cp.stdin.write(`This is secret. Message about "_" symbol!`);
    cp.stdin.end();

    cp.stdout.on("data", (chunk) => {
      expect(chunk.toString()).toBe(EXPECTED_OUTPUT);
      done();
    });
  });

  test("A-A-A-R1-R0-R0-R0-C1-C1-A cipher", (done) => {
    const cp = spawn("node", ["ciphering_cli.js", "-c", "A-A-A-R1-R0-R0-R0-C1-C1-A"]);

    const EXPECTED_OUTPUT = `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`;

    cp.stdin.write(`This is secret. Message about "_" symbol!`);
    cp.stdin.end();

    cp.stdout.on("data", (chunk) => {
      expect(chunk.toString()).toBe(EXPECTED_OUTPUT);
      done();
    });
  });

  test("C1-R1-C0-C0-A-R0-R1-R1-A-C1 cipher", (done) => {
    const cp = spawn("node", ["ciphering_cli.js", "-c", "C1-R1-C0-C0-A-R0-R1-R1-A-C1"]);

    const EXPECTED_OUTPUT = `This is secret. Message about "_" symbol!`;

    cp.stdin.write(`This is secret. Message about "_" symbol!`);
    cp.stdin.end();

    cp.stdout.on("data", (chunk) => {
      expect(chunk.toString()).toBe(EXPECTED_OUTPUT);
      done();
    });
  });
});
