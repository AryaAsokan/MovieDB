 // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var database = require('./config/database');
    var port     = process.env.PORT || 8888;
    var path = require('path');
    mongoose.Promise = Promise;

    // configuration =================

    //mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu'); 
    mongoose.connect(database.url);    // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());
    /*app.get('*', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });*/
    // Define Model==========
   /*var Todo = mongoose.model('Todo', {
    text : String
});*/

   var Hist = mongoose.model('Hist', {
    text : String
});
//routes

    //api

    //get all todos
  app.get('/api/hists', function(req, res) {

        // use mongoose to get all todos in the database
        Hist.find(function(err, hists) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(hists); // return all todos in JSON format
        });
    });

   app.post('/api/hists', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Hist.create({
            text : req.body.text,
            done : false
        }, function(err, hists) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Hist.find(function(err, hists) {
                if (err)
                    res.send(err)
                res.json(hists);
            });
        });

    });

    // create todo and send back all todos after creation
    // delete a todo

/*app.get('*', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });*/
       /* app.get('*', function(req,res) {
            res.sendFile('./public/index.html');
        });*/

    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port "+port);


   