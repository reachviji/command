#!/usr/bin/env nodejs
var WebSocket = require('ws'); 
var ROSLIB = require('roslib');

	/*webSocket Cloud options*/ 
var ws = new WebSocket('wss://ws-broadcast-server-d062507.cfapps.eu10.hana.ondemand.com'); 

ws.on('message', function incoming(msg) { 
   console.log("This is from websocket: " +msg);
   pub(msg);
   
 }); 

function pub(msg) {
	// Publishing a Topic
// ------------------

	var speak = new ROSLIB.Topic({
	  //ros : ros,
	  name : '/chatbot',
	  messageType : 'std_msgs/String'
	});

	var str = new ROSLIB.Message({
		data: msg
	});

	console.log("Publishing chatbot");
	speak.publish(str);
};
