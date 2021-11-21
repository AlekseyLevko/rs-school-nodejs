const { stdout, stderr } = process;

module.exports = () => {
  process.on("exit", (code) => {
    switch (code) {
      case 0:
        stdout.write("Process completed successfully!");
        break;
      case 2:
        stderr.write(
          `Duplicates of the "-c" ("--config") flag were detected. The program terminated with an error code ${code}`
        );
        break;
      case 3:
        stderr.write(
          `Duplicates of the "-i" ("--input") flag were detected. The program terminated with an error code ${code}`
        );
        break;
      case 4:
        stderr.write(
          `Duplicates of the "-o" ("--output) flag were detected. The program terminated with an error code ${code}`
        );
        break;
      case 5:
        stderr.write(
          `No access to the file specified in -i (--input). Check the value of the -i (--input) argument. The program terminated with an error code ${code}`
        );
        break;
      case 6:
        stderr.write(
          `No access to the file specified in -o (--output). Check the value of the -o (--output) argument. The program terminated with an error code ${code}`
        );
        break;
      case 10:
        stderr.write(
          `The config is not valid or missing. Check the value of the -c (--config) argument.The program terminated with an error code ${code}`
        );
        break;
      case 11:
        stderr.write(
          `Config should be in format {XY(-)}n. Valid values for X: "C", "R", "A". The program terminated with an error code ${code}`
        );
        break;
      case 12:
        stderr.write(
          `Config should be in format {XY(-)}n. When X is equal to "C" or "R", Y should be "0" or "1". The program terminated with an error code ${code}`
        );
        break;
      case 13:
        stderr.write(
          `Config must have the format {XY(-)}n. If X is equal to "A" (Atbash cipher), the value of Y should be omitted. The program terminated with an error code ${code}`
        );
        break;
      case 21:
        stderr.write(`readableStream error. The program terminated with an error code ${code}`);
        break;
      case 22:
        stderr.write(`writableStream error. The program terminated with an error code ${code}`);
        break;
      case 23:
        stderr.write(`pipeline error. The program terminated with an error code ${code}`);
        break;

      default:
        stderr.write(`The program terminated with an error code ${code}`);
    }
  });
};
