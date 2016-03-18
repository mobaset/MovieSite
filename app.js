/**
 * Created by Mo on 3/11/2016.
 */
var express = require('express'), xhtmlController = require('./controllers/xhtmlController');

var app = express();

var port = process.env.PORT || 8080; // a variable that stores a dynamic port
var apiKey = 'fa33214ebc139bf94fdfc206933d1168';
var apiURL = 'https://api.themoviedb.org/3/';


// a middleware to grap CSS and JS files
app.use('/public', express.static(__dirname + '/Public'));

xhtmlController(app);

app.listen(port);