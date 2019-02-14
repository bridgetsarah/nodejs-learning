const
    fs = require('fs'),
    filename = progress.argv[2];
if (!filename) {
    throw Error("A file to watch must be specifified!");
}    
fs.watch(filename, function() {
    console.log("File" + filename + "just changed!");
});
console.log("Now watching" + filename + "for changes");
