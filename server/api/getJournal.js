var mongoose = require('mongoose');
var Journal = mongoose.model('Journal');

module.exports = {
	findName,
	findIF
}

var journal = new Journal();
journal.name = "lucas";
journal.save();
//add test data
// var journal = new Journal({
// 	name: "Antarctic Science",
// 	indexfactor: 1.6
// });
// console.log(1)
// journal.save((err, data) => {
// 	console.log(err, data)
// });

function findName(cb) {
	Journal.find({ "name": "jessica" }, cb)
}

function findIF(cb) {
	Journal.find({ "name": "Antarctic Science" }, cb);
}