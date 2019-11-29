import * as fs from 'fs';
import * as path from 'path';
import csv from 'fast-csv';

var ifile = "write1_input.csv";
var input = fs.readFileSync(ifile,'utf-8');

const stream = csv.format({ headers: true });
stream.pipe(process.stdout);

csv.parseString(input, { headers: true })
    .on('error', error => console.error(error))
    .on('data', row => {
        stream.write(row);
    })
    .on('end', rowCount => console.error(`\nParsed ${rowCount} rows`))
;

