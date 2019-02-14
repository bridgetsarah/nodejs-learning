const fs = require('fs');
const filename = process.argv[2];

fs.watch('target.txt', (eventType, filename) =>{
     if (!filename) {
        throw Error('A file to watch must be specified!');
    } else 
        console.log (`Now watching ${filename} for changes...`);{

        })