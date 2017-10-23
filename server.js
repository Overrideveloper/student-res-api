//houses protocols to create server

var express = require('express'),
    app = express(),
    //start server on port 5000
    port = process.env.PORT || 5000,
    //mongoose instance
    mongoose = require('mongoose'),
    //load created data model
    Student = require('./api/models/resModel'),
    //body-parser instance
    bodyparser = require('body-parser');

//connect to MongoDB server
mongoose.Promise = global.Promise;
var option = {
    useMongoClient : true,
    keepAlive: 300000,
    connectTimeoutMS: 30000
};
mongoose.connect('mongodb://overrideveloper:Smithamanda1@ds229435.mlab.com:29435/schoolinfodb', option)
    .then(function(){
        console.log('Connected to MongoDB');
    },
    function(err){
        console.log('Error: ' + err);
    });

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