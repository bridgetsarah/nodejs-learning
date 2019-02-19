///////////////////////////////////////////// - Simple approach to reading, pulling files (small files only!!)
const fs = require('fs');
fs.readFile('target.txt', function (err, data){
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
/////////////////////////////////////////////

//////////////////////////////////////////// - Simple approach to writing to small files
fs.writeFile('target.txt', 'a witty message', function (err){
    if (err){
        throw err;
    }
    console.log("file saved!");
})  