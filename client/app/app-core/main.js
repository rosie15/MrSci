module.exports = function(ngModule) {
	ngModule.controller("MainCtrl", function($scope, $http) {
		$scope.datatesting = "Helloworld";
		$http.get("/journal/ANTARCT SCI")
			.success(function(data) {
				$scope.journals = data;
				console.log(data);
			})
	})
}