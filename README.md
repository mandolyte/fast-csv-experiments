# fast-csv-experiments
Tests and Validation of the npm fast-csv package

## Setup 

After cloning the newly created repo, I changed into the directory and ran:
```
npm init
npm install -S fast-csv
```

*Note* my testing uses modules and I have an alias for the long command required:
`alias nx=node --experimental-modules`.

Thus all my tests are executed as follows:
`nx basename.mjs`.

## Organization of tests

The tests are divided into `read` and `write` and are in folders with those names.
Each test will at least have a node script like this: `basename.mjs`.
If there are input or output files, they will share the `basename` but with
suffixes added and with different extensions. For example, an input file might be:
`basename_input.csv`.

## Read/Write Tests

These tests read in a file and write it back out. Thus the input and output
should be equivalent. Each test has a basename such as `write1`. This is provided
to the bash script `runtest.sh` like this: `sh runtest.sh write1`. 

The script runs this: `node --experimental-modules write1.mjs`. The JavaScript reads
in `write1_input.[tc]sv` and writes out `write1_output.txt`. It then runs a diff 
command against the input and output files to compare them.

1. `write1`: simple CSV to CSV
2. `write2`: simple TSV to TSV
3. `write3`: a TSV file with newlines in cell values (see `write3_input.tsv`)
4. `en_tn_tit`: the UTN for the book of Titus
5. `useTabs`: a TSV file that contains tab characters in the column values

## Read Tests

The only read test processes a CSV file and compares the result against
the expected results array of JS Objects.

To run: `node --experimental-modules read1.mjs`.