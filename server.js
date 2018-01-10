// Require installed npm packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Create an instance of the express app
var app = express();

// TA
// Serve static content for the app from the public directory
// What does the __ dirname do and is it needed?
app.use(express.static(__dirname + "/public"));

// Parse the text as URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST method having ?_method
app.use(methodOverride("_method"));

// Set handlebars as the default templating 'engine' of express and envoke exphbs object
// Pass in a default layout of main
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// Import express routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Specify the port; may use = process.env.PORT || 8080
var port = process.env.PORT || 8080;
app.listen(port);
