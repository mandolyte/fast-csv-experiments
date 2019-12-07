import csv from "fast-csv";

let expected = [
    ['Col1','Col2','Col3'],
    ['1.1','1.2','1.3'],
    ['2.1','2.2','2.3'],
]

let input = `Col1,Col2,Col3
1.1,1.2,1.3
2.1,2.2,2.3
`

let rows = [];

function showrows() {
    for (let i=0; i < rows.length; i++) {
        console.log("Working on i="+i,"row=",rows[i]);
        for (let j=0; j < rows[i].length; j++) {
            if ( rows[i][j] !== expected[i][j] ) {
                console.log("Mismattch (i,j):("+i+","+j+"):",
                expected[i][j]," vs ",rows[i][j]);
            }
        }
    }
}


csv.parseString(input,{ headers: false })
    .on("data", row => rows.push(row) )
    .on("end", rowcount => showrows() ) 
