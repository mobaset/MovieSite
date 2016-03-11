/**
 * Created by Mo on 3/11/2016.
 */
var http = require('http');
var fs = require('fs');



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'application/xhtml+xml'});
    var html = fs.readFile(__dirname + '/views/MoviePage.xhtml');
    res.end(html);
}).listen(8080);