var mongoose = require('mongoose');
var Journal = mongoose.model('Journal');
var data = require("../data/journal.json")

module.exports = {
	findName,
	findSubject
}

//record journal data to mongodb
var length = data.length;
recordData(data);

function recordData(data) {
	for(var i=0; i<length; i++) {
		var journal = new Journal();
		journal.name = data[i].name;
		journal.indexfactor = data[i].indexFactor;
		journal.subject = data[i].Subject;
		journal.level = data[i].level;
		journal.save();
	}
}

// add test data
// var journal = new Journal({
// 	name: "Antarctic Science",
// 	indexfactor: 1.6
// });
// console.log(1)
// journal.save((err, data) => {
// 	console.log(err, data)
// });

function findName(name, cb) {
	Journal.find({ "name": name }, cb)
}

function findSubject(subject, cb) {
	Journal.find({ "subject": subject }, cb);
}