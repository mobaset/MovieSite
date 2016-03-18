/**
 * Created by Mo on 3/11/2016.
 */
var express = require('express'), xhtmlController = require('./controllers/xhtmlController');

var app = express();

var port = process.env.PORT || 8080; // a variable that stores a dynamic port
var apiKey = 'fa33214ebc139bf94fdfc206933d1168';
var apiURL = 'https://api.themoviedb.org/3/';


// a middleware to grap CSS and JS files
app.use('/public/images', express.static('./Public/images'));
app.use('/public/css', express.static('./Public/css'));
app.use('/public/js', express.static('./Public/js'));

xhtmlController(app);

app.listen(port);