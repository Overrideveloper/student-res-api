//houses protocols to create server

var express = require('express'),
    app = express(),
    port = process.env.port || 4000;

app.listen(port);

console.log(`School Resource Management API server started on ` + port);