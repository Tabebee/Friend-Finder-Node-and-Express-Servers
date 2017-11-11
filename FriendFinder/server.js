var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var port = process.env.PORT || 8081;

//  express handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./app/public'));


// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes")(app);
// require(path.join(__dirname, './app/routing/apiRoutes'))(app);

require("./app/routing/htmlRoutes")(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(port, function() {
    console.log("App listening on PORT: " + port);
});



