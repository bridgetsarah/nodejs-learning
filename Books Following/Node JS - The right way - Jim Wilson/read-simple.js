///////////////////////////////////////////// - Simple approach to reading, pulling files (small files only!!)
const fs = require('fs');
fs.readFile('target.txt', function (err, data){
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
/////////////////////////////////////////////