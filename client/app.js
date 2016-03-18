
var angular = require('angular');
var ngRoute = require("angular-route");

var ngModule = angular.module("myApp", [ngRoute]);

require("./components/journal-cover/index.js")(ngModule);
require("./app/app-core/index.js")(ngModule);
require("./components/test/index.js")();

module.exports = ngModule;