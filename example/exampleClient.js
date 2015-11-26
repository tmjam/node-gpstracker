var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8000;

var client = new net.Socket();

client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
    client.write('##,imei:359710049381867,A;');    

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);   
    //client.write('alarm,150728134444,,F,054441.000,A,3848.3116,N,12116.7837,W,0.00,0;'); 
    client.write('imei:359710049381867,tracker,151126144215,,F,064214.000,A,4150.5131,N,12234.5519,W,33.17,208.14;');
});

//connected
client.on('connected', function(data) {    
    console.log('CONNECTED: ' + data);
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed', arguments);
});