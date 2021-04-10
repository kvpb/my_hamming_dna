#!/usr/bin/env bash

printf '\033[2J\033[3J\033[1;1H';
printf '$ node my_hamming_dna.js GAGCCTACTAACGGGAT CATCGTAATGACGGCCT;\n';
node my_hamming_dna.js  GAGCCTACTAACGGGAT   CATCGTAATGACGGCCT ;
printf '\n$ node my_hamming_dna.js '\''GAGCCTACTAACGGGAT'\'' '\''CATCGTAATGACGGCCT'\'';\n';
node my_hamming_dna.js 'GAGCCTACTAACGGGAT' 'CATCGTAATGACGGCCT';
printf '\n$ node my_hamming_dna.js "GAGCCTACTAACGGGAT" "CATCGTAATGACGGCCT";\n';
node my_hamming_dna.js "GAGCCTACTAACGGGAT" "CATCGTAATGACGGCCT";
printf '\n$ node my_hamming_dna.js GAGCCTACTAACGGGAT;\n'
node my_hamming_dna.js  GAGCCTACTAACGGGAT                     ;
printf '\n$ node my_hamming_dna.js '\''GAGCCTACTAACGGGAT'\'' '\'''\'';\n';
node my_hamming_dna.js ''                  'CATCGTAATGACGGCCT';
printf '\n$ node my_hamming_dna.js "" "CATCGTAATGACGGCCT";\n';
node my_hamming_dna.js ""                  ""                 ;

# script.sh
# 
# Karl `kvpb`
# LinkedIn: https://www.linkedin.com/in/karlbertin
# 
# In my_hamming_dna.js, enable (uncomment) lines 14, 16 to 28 and 43, and re-disable (comment out) them.
