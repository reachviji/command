/*ROS-bridge endpoint*/ 
var WebSocket = require('ws'); 

/*webSocket Cloud options*/ 
var ws = new WebSocket('wss://ws-broadcast-server-d062507.cfapps.eu10.hana.ondemand.com'); 
 
ws.on('open', function open() { 
	console.log("connected to HANA websocket");
	ws.send("Thank God!! I am working"); 
}); 