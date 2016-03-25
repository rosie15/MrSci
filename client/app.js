
var angular = require('angular');
var ngRoute = require("angular-route");

var ngModule = angular.module("myApp", [ngRoute]);

require("./components/banner/index.js")(ngModule);
require("./app/app-core/index.js")(ngModule);

module.exports = ngModule;