// Require npm package express to create the router
var express = require('express');

// Create the router for the application
var router = express.Router();

// Import the model burger.js to use its db functions
var burger = require('../models/burger_model.js');

// Create all of the routes and set up logic within the routes where needed
// TA does This route gets all the data
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render('index',{data});
  })
})

router.put("/burgers/update", function(req,res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect('/');
  })
})

router.post('/burgers/create', function(req,res){
  burger.create(req.body.burger_name, function(result) {
    res.redirect('/');
  })
})
// Export route for server.js to use.
module.exports = router;
