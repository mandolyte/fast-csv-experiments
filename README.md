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

