var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(columns, vals, callback) {
    orm.create("burgers", columns, vals, function(res) {
      callback(res);
    });
  },
  update: function(objectColumnValues, condition, callback) {
    orm.update("burgers", objectColumnValues, condition, function(res) {
      callback(res);
    });
  },
  delete: function(condition, callback) {
    orm.delete("burgers", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
