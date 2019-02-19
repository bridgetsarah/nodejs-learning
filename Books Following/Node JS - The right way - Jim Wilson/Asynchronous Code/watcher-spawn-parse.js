//Define FS 
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];
if (!filename) {
throw Error('A file to watch must be specified!');
}
//Stream
fs.watch(filename, function(){
    let
        ls = spawn('ls', ['-lh', filename]),
        output = '';
    ls.stdout.on('data', function(chunk){ //the on() adds a listener for the specified event type - listening to data events
        output += chunk.toString(); // calling the 'toString(); function, converts the buggers content into a javscript string
    });    

    ls.on('close', function() {
        let parts = output.split(/|s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
});        