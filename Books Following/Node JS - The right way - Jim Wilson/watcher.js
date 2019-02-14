const fs = require('fs');
fs.watch('target.txt', function(){
    console.log("file 'target.text. just changed!");
});
console.log("now watching target.txt for changes....");