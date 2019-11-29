import * as fs from "fs";
import csv from "fast-csv";

let expected = [
    `{ "Col1": "1.1", "Col2": "1.2", "Col3": "1.3" }`,
    `{ "Col1": "2.1", "Col2": "2.2", "Col3": "2.3" }`
]

let rows = [];

function showrows() {
    for (let i=0; i < rows.length; i++) {
        console.log("working on i="+i);
        let expobj = JSON.parse(expected[i])
        if ( JSON.stringify(rows[i]) == JSON.stringify(expobj) ) {
            continue
        }
        console.log("Mismattch, i="+i+":")
        console.log("Expected:", JSON.stringify(expobj), typeof(expobj))
        console.log("  Actual:", JSON.stringify(rows[i]), typeof(rows[i]))
    }
}


fs.createReadStream("read1_input.csv")
    .pipe(csv.parse({ headers: true }))
    .on("data", row => rows.push(row) )
    .on("end", rowcount => showrows() ) 
