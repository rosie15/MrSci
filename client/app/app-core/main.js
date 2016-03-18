module.exports = function(ngModule) {
	ngModule.controller("MainCtrl", function($scope, $http) {
		$scope.datatesting = "Helloworld";
		$http.get("/journal/ANTARCT SCI")
			.success(function(data) {
				$scope.journals = data;
				console.log(data);
			})
	})
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateURL: "./main.html",
				controller: "MainCtrl"
			})
	}])


	// ngModule.directive("main", function() {
	// 	require("./main.less");
	// 	return {
	// 		restrict: "E",
	// 		scope: {},
	// 		template: `
	// 			<span>{{ MainCtrl.journal }}</span>
	// 			<ul>
	// 				<li>
	// 					<p>{{ MainCtrl.journals }}</p>
	// 				</li>
	// 			</ul>
	// 		`,
	// 		controllerAs: "MainCtrl",
	// 		controller: function($http) {
	// 			var $scope = this;
	// 			$scope.journal = "Helloworld";
	// 			fetch("../../data/world.json")
	// 				.then(function(data) {
	// 					$scope.journals = data;
	// 				})
	// 		}
	// 	}
	// })
}