module.exports = function(ngModule) {
	ngModule.controller("MainCtrl", function($scope, $http) {
		$scope.journalName = "acad med";
		$http.get("/journal/" + $scope.journalName.toUpperCase())
			.success(function(data) {
				$scope.journals = data;
			})
		$scope.sayHello = function() {
			$http.get("/journal/" + $scope.journalName.toUpperCase())
			.success(function(data) {
				$scope.journals = data;
			})
		}
	})
}