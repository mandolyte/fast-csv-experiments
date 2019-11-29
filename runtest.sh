#!/bin/sh
NX="node --experimental-modules"

if [ "$1x" = "x" ]; then
    echo input arg of BASE missing
    echo for example, sh runtest.sh write1
    exit
fi

BASE=$1
INPUT=${BASE}_input.csv
if [ -f ${BASE}_input.tsv ]; then
    INPUT=${BASE}_input.tsv
fi
OUTPUT=${BASE}_output.txt

rm -f $OUTPUT
$NX $BASE.mjs > $OUTPUT

echo Differences:
diff $INPUT $OUTPUT