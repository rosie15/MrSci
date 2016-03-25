var express = require('express');
var router = express.Router();
var path = require("path");
var api = require("../api/getJournal");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//api
router.get("/journal/:name", function(req, res, next) {
	var param = req.params.name;
	console.log(param);
	api.findName(param, function(err, journals) {
		res.send(journals);
		//res.sendFile(path.join(__dirname, "../data/journal.json"));
	})
});

router.get("/journal/subject/:subject", function(req, res, next) {
	var param = req.params.subject;
	api.findSubject(param, function(err, journals) {
		res.send(journals);
	})
})


module.exports = router;
