'use strict';

var WebSocket = require('ws');
const express = require('express');
const bodyParser = require('body-parser');
const restService = express();

restService.use(bodyParser.urlencoded({
	extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
	var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.command ? req.body.result.parameters.command : "Seems like some problem. Speak again."
	console.log("This is from webhook: " +speech);
	senddatatows(speech);
	
	return res.json({
		speech: speech,
		displayText: speech,
		source: 'command'
	});
	
});

function senddatatows(speech) {
	// websocket link
	var ws = new WebSocket('wss://ws-broadcast-server-d062507.cfapps.eu10.hana.ondemand.com');
//var speech = senddatatoapi();
	ws.on('open', function open() {
		ws.send(speech);
	});
	ws.on('message', function incoming(msg) {
		console.log("This is from websocket: " +msg);
		var value = {
			"source":"command",
			"destination": "/chatbot",
			"data": msg
		}
		try{
			var data = JSON.parse(JSON.stringify(value));
			if(data.source && data.destination && data.data){
				console.log("receive data from: "+data.data);
			}
		}	
		catch(e){
			console.error(e);
		}	
	});
	ws.on('close', function close() {
  //ws_client_state = "offline";
		console.log('websocket cloud client disconnected');
	});
}

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
