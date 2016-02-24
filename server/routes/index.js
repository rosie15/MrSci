var express = require('express');
var router = express.Router();
var api = require("../api/getJournal");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//api
router.get("/journal", function(req, res, next) {
	api.findName(function(err, journals) {
		console.log(journals);
		res.send(journals);
	})
});


module.exports = router;
