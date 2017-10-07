//houses protocols to create server

var express = require('express'),
    app = express(),
    //start server on port 4000
    port = process.env.port || 4000,
    //mongoose instance
    mongoose = require('mongoose'),
    //load created data model
    Student = require('./api/models/resModel'),
    //body-parser instance
    bodyparser = require('body-parser');

//connect to MongoDB server
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SchoolInfoDB');

//use body-parser
app.use(bodyparser.urlencoded({ extended : true }));
app.use(bodyparser.json());


//import routes
var routes = require('./api/routes/resRoutes');
//register routes
routes(app);

//add 404 error code
app.use(function(req, res){
    res.status(404).send({ url: req.originalUrl + ' not found!'});
});

app.listen(port);

console.log(`School Resource Management API server started on ` + port);