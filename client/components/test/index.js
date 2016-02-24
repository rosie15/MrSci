module.exports=function() {
	console.log("successfully connected");
	var indexFactor = fetch("/journal")
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			console.log(data)
		});

	console.log(indexFactor);
};