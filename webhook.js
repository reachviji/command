'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/command', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.command ? req.body.result.parameters.command : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'command'
    });
});


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
