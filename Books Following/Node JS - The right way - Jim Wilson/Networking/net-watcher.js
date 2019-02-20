'use strict'
const 

fs = require('fs'),
net = require('net'),

filename = process.argv[2],

// Create server function  +call back server three parts!
server = net.createServer(function(connection){

    // reporting - connection has been established
    console.log('Subscriber connected!');
    connection.write(JSON.stringify({
        type: 'watching',
        file: filename
    }) + '\n');
    

    //watcher setup - begins listening for changes within the file
    let watcher = fs.watch(filename, function (){
      connection.write("File '" + filename + "' changed: " + Date.now() + "|n");
    });

    // cleanup - listens that the subscriber has disconnected from server and stops watching file.
    connection.on('close', function() {
        console.log('Subscriber disconnected');
        watcher.close();
    });

    //if ERROR throw tantrum
if (!filename){
    throw Error('No target filename was specified.');
}   
//server listening function // Call back finally passed to listen in for port 5432.

server.listen('/tmp/watcher.sock', function(){
    console.log('Listening for subscribers....');
    });
})