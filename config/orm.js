// All of the MySQL code follows to collect data; the code will be modified using models/burger_model.js

// Import the MySQL connection located in connection.js
var connection = require("./connection.js");

// Object Relational Mapper (ORM) for all of the SQL statement functions
// orm.all method. The cb var represents the function being passed from server.js
var orm = {
  all: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(err, result){
      if(err) throw err;
      cb(result)
    })
  },
  // orm.update method
  update: function(tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + " SET devoured = 1 WHERE id = " + condition + ";", function(err, result){
      if(err) throw err;
      cb(result);
    })
  },

// orm.create.method
  create: function(tableInput, val, cb) {
    connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('"+val+"');", function(err, result){
      if(err) throw err;
      cb(result);
    })
  }
}
// Export the orm object for the model burger_model.js
module.exports = orm;
