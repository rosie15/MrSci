var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JournalSchema = new Schema({
	name: { type: String },
	indexfactor: { type: Number },
	subject: { type: String },
	level: { type: String }
});

module.exports = mongoose.model("Journal", JournalSchema);