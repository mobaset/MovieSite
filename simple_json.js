/**
 * Created by Mo on 3/11/2016.
 */
var http = require('http'), fs = require('fs');

function handle_incoming_request (req, res) {
    console.log('Incoming request: (' + req.method + ') ' + req.url);

    load_image_list( function (err, images) {
        if (err != null) {
            res.writeHead(503 ,{'Content-Type': 'application/json'});
            res.end(JSON.stringify({error: 'file_error', message: err.message}) + '\n');
            return;
        }
        res.writeHead(200 ,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: null, data: {images: images}}) + '\n');
    });

}

function load_image_list (callback) {
    fs.readdir('Images/', function (err, file_list) {
        callback(err, file_list);
    })
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);