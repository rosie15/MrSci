var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/mrsci");
var db = mongoose.connection;

db.once("open", function(){
	console.log("connect successfully to database: mrsci");
});

var Journal = require('./journal');

exports = Journal;