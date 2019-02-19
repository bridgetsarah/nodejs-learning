const fs = require('fs'),
const filename = process.argv[2];


if (!filename) {
    throw Error("A file to watch must be specificied!");
    }

fs.watch('target.txt', () => {
    console.log("file" + filename + "just changed!");
});
console.log("now watching" + filename + "for changes...");
