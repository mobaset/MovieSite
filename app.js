/**
 * Created by Mo on 3/11/2016.
 */
var express = require('express'), fs = require('fs');
var app = express();
var port = process.env.PORT || 8080; // a variable that stores a dynamic port


// a middleware to grap CSS and JS files
app.use('/public', express.static(__dirname + '/public'));

// the get method to open the homepage when the url is called.
app.get('/', function (req, res) {
    fs.createReadStream(__dirname + '/Views/HomePage.xhtml').pipe(res);
});

// a get method to load movie page
app.get('/MoviePage.xhtml', function (req, res) {
    fs.createReadStream(__dirname + '/Views/MoviePage.xhtml').pipe(res);
});

app.listen(port);