module.exports = function(ngModule) {
	ngModule.directive("main", function() {
		require("./main.less");
		return {
			restrict: "E",
			scope: {},
			template: `
				<input ng-model = "MainCtrl.queryJournal" />
				<button ng-click="MainCtrl.getData()">查询</button>
				<span>{{ MainCtrl.queryJournal }}</span>
				<br>
				<div>影响因子</div>
				<span>{{ MainCtrl.data }}</span>
			`,
			controllerAs: "MainCtrl",
			controller: function() {
				var $scope = this;
				$scope.queryJournal = "ACAD MED";

				$scope.getData = function() {
					fetch("/journal/" + $scope.queryJournal)
						.then(function(res) {
							return res.json();
						})
						.then(function(data){
							$scope.data = data[0].indexfactor;
						});
				};
			}
		}
	})
}