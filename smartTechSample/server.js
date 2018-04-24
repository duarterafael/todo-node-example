(function () {

    "use strict"

    // set up ========================
    const express = require('express');                // create our app with express
    const logger = require('morgan');                  // log requests to the console (express4)
    const bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    const path = require('path');
    
    // configuration =================
    // Set up the express app
    const server = express();
    // Log requests to the console.
    server.use(logger('dev'));                                          // log every request to the console
    server.use(express.static(__dirname + '/client/public'));           // set the static files location /public/img will be /img for users
    server.use(bodyParser.json());                                      // parse application/json
    server.use(bodyParser.urlencoded({ extended: 'true' }));            // parse application/x-www-form-urlencoded
    server.use(bodyParser.json({ type: 'application/vnd.api+json' }));  // parse application/vnd.api+json as json
    server.use(methodOverride());
    
    // routes ======================================================================
    require('./server/routes')(server);
    // application -------------------------------------------------------------
    server.get('*', function (req, res) {
        //res.sendFile('index.html', { root: path.join(__dirname, '../client') });
        res.sendFile('index.html', {root: __dirname});
    });

    module.exports = server;

})();