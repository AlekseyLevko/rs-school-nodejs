# rs-school-nodejs

To run the program from the command line, use the `"node ciphering_cli"` command with the following arguments:

1.  **-c, --config**: config for ciphers (required argument)
    Config is a string with pattern `{XY(-)}n`, where:

- `X` is a cipher mark:
  - `C` is for Caesar cipher (with shift 1)
  - `A` is for Atbash cipher
  - `R` is for ROT-8 cipher
- `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
  - `1` is for encoding
  - `0` is for decoding

2.  **-i, --input** with the value "./input.txt": a path to input file. This is an optional argument. If this argument is missing, the text will be read from the command line.

3.  **-o, --output** with the value "./output.txt": a path to output file. This is an optional argument. If this argument is missing, the text will be written to the command line.

**Usage example:**

```bash
$ node ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

```bash
$ node ciphering_cli --config "C1-C1-R0-A" --input "./input.txt" --output "./output.txt"
```

```bash
$ node ciphering_cli --config "C1-C1-R0-A" -i "./input.txt" --output "./output.txt"
```

```bash
$ node ciphering_cli -c "C1-C1-R0-A" -i "./input.txt"
```

```bash
$ node ciphering_cli -c "C1-C1-R0-A"
```
