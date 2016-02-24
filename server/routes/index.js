var express = require('express');
var router = express.Router();
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
		console.log(journals);
		res.send(journals);
	})
});


module.exports = router;
