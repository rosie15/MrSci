var devMode = (process.env.NODE_ENV !== "production");

var webpack = require("webpack");
var path = require("path");


module.exports={
	context: path.join(__dirname, "./client"),
	entry: "./app.js",
	output: {
		path: path.join(__dirname, "./client"),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	modules: {
		loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.(png|jpg)$/, loader: "url?limit=8192" },
            { test: /\.json$/, loader: "json" }
        ]
	}
}
