module.exports=function() {
	console.log("successfully connected");
	var indexFactor = fetch("/journal/ACAD MED")
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			console.log(data[0].name);
			console.log(data[0].level);
		});

	console.log(indexFactor);
};