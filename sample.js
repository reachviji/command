#!/usr/bin/env nodejs
var WebSocket = require('ws'); 

	/*webSocket Cloud options*/ 
var ws = new WebSocket('wss://ws-broadcast-server-d062507.cfapps.eu10.hana.ondemand.com'); 

ws.on('message', function incoming(msg) { 
   console.log("This is from websocket: " +msg); 
 }); 

