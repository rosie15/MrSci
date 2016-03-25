module.exports = function(ngModule) {
	ngModule.controller("MainCtrl", function($scope, $http) {
		$scope.journalName = "acad med";
		$scope.journalSubject = "mathematics";

		$scope.findJournal = function() {
			$http.get("/journal/" + $scope.journalName.toUpperCase())
			.success(function(data) {
				$scope.journals = data;
			})
		}
		$scope.findSubject = function() {
			$http.get("/journal/subject/" + $scope.journalSubject.toUpperCase())
			.success(function(data) {
				$scope.journals = data;
			})
		}
	})
}