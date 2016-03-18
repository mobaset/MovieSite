/**
 * Created by Mo on 3/18/2016.
 */
var fs = require('fs'), bodyParser = require('body-parser');

module.exports = function (app) {
    // the get method to open the homepage when the url is called.
    app.get('/', function (req, res) {
        fs.createReadStream('./Views/HomePage.xhtml').pipe(res);
        // res.render(__dirname + '/Views/HomePage.xhtml'); (render
        // function won't work for us as render only work for HTML files)
    });

    // a get method to load movie page
    app.get('/MoviePage.xhtml', function (req, res) {
        fs.createReadStream('./Views/MoviePage.xhtml').pipe(res);
        // res.render(__dirname + '/Views/MoviePage.xhtml'); (render
        // function won't work for us as render only work for HTML files)
    });
};