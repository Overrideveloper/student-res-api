//houses protocols to create server

var express = require('express'),
    app = express(),
    //start server on port 5000
    port = process.env.PORT || 3000,
    path = require('path'),
    //mongoose instance
    mongoose = require('mongoose'),
    //load created data model
    Student = require('./api/models/resModel'),
    //body-parser instance
    bodyparser = require('body-parser'),
    //express file-upload instance
    fileUpload = require('express-fileupload');

//connect to MongoDB server
mongoose.Promise = global.Promise;
var option = {
    useMongoClient : true,
    keepAlive: 300000,
    connectTimeoutMS: 30000
};
mongoose.connect('mongodb://localhost/SchoolInfoDB', option)
    .then(function(){
        console.log('Connected to MongoDB');
    },
    function(err){
        console.log('Error: ' + err);
    });

app.use(express.static(process.cwd() + '/upload'));

//use body-parser
app.use(bodyparser.urlencoded({ extended : true }));
app.use(bodyparser.json());
//use express-fileupload
app.use(fileUpload({ safeFileNames: true, preserveExtension: true, limits: { fileSize: 15 * 1024 * 1024 }}));

//import routes
var routes = require('./api/routes/resRoutes');

app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
    }

    // Pass to next layer of middleware
    next();
});

//register routes
routes(app);

//add 404 error code
app.use(function(req, res){
    res.status(404).send({ 404: req.originalUrl + ' not found!'});
});

app.listen(port);

console.log(`SIMS server started on ` + port);