import * as fs from 'fs';
import csv from 'fast-csv';

var ifile = "write2_input.tsv";
var input = fs.readFileSync(ifile,'utf-8');

const stream = csv.format({ delimiter: '\t', headers: true });
stream.pipe(process.stdout);

csv.parseString(input, { headers: true, delimiter: '\t' })
    .on('error', error => console.error(error))
    .on('data', row => {
        stream.write(row);
    })
    .on('end', rowCount => console.error(`\nParsed ${rowCount} rows`))
;

