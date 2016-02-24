var angular = require('angular');

var ngModule = angular.module("myApp", []);

require("./components/journal-cover/index.js")(ngModule);
require("./components/test/index.js")();

module.exports = ngModule;