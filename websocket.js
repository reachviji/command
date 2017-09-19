'use strict';

var WebSocket = require('ws');

exports.hello = function websocket(speech){
	const socket = new WebSocket('wss://ws-broadcast-server-d062507.cfapps.eu10.hana.ondemand.com');
	
	socket.on('open', function open() {
		socket.send(speech);
	});

	socket.on('message', function(data) {	
		console.log("This is from websocket: " +data);
	});
};

