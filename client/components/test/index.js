module.exports=function() {
	console.log("successfully connected");
	var result;
	var indexFactor = fetch("/journal/ACAD MED")
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			result = 5;
			console.log(result);
		});
	//setInterval(function(){console.log(result)}, 1000);
};