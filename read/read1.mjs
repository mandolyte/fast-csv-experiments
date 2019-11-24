import * as fs from 'fs';
import csv from 'fast-csv';

fs.createReadStream('read1.csv')
  .pipe(csv.parse({ headers: true }))
  .on('data', row => console.log(row));


/* Expected output:
$ nx read1.mjs 
(node:3718) ExperimentalWarning: The ESM module loader is experimental.
{ Col1: '1.1', Col2: '1.2', Col3: '1.3' }
{ Col1: '2.1', Col2: '2.2', Col3: '2.3' }
$ 
*/