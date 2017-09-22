'use strict';
const Restify = require('restify');
const server = Restify.createServer({
  name: "command"
});
const request = require('request');
const PORT = process.env.PORT || 8000;

// call the other js file
const websocket = require('./websocket');


server.use(Restify.bodyParser());
server.use(Restify.jsonp());

// POST route handler
server.post('/command', (req, res, next) => {''
  let {
    status,
    result
  } = req.body;

   if(status.code === 200){
	 const command = result.parameters;
	 let speech = `Robot will ` +result.parameters.command + ` now`;
	 // call the websocket and see for the response
	 console.log("This is from webhook: " +speech);
	 //websocket.hello(speech);
	 
	 res.json({
		speech: speech,
        displayText: speech,
        source: "speechapi" 
	  }); 
   }  
});

server.listen(PORT, () => console.log(`Robot Command running on ${PORT}`));
