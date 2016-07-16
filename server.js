// set up
var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var morgan      = require('morgan');
var bodyParaser = require('body-parser');
var methodOverride = require('method-override');

// configuration
mongoose.connect(database.remoteUrl);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParaser.urlencoded({'extended': 'true'}));
app.use(bodyParaser.json());
app.use(bodyParaser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

// routes ======================================================================
require('./app/routes.js')(app);

// listen server.js
app.listen(8080);
console.log("App listening on port 8080");
