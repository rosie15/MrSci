module.exports = function(ngModule) {
	ngModule.directive("main", function() {
		require("./main.less");
		return {
			restrict: "E",
			scope: {},
			template: `
				<input ng-model = "MainCtrl.queryJournal" />
				<button ng-click="MainCtrl.getData()">查询</button>
				<br>
				<div>影响因子</div>
				<span>{{ MainCtrl.data }}</span>
				<br>
				<div>分区</div>
				<span ng-model = "MainCtrl.level">{{ MainCtrl.level }}</span>
			`,
			controllerAs: "MainCtrl",
			controller: function() {
				var $scope = this;
				$scope.queryJournal;
				$scope.level;
				$scope.getData = function() {					
					fetch("/journal/" + $scope.queryJournal)
						.then(function(res) {
							return res.json();
						})
						.then(function(data){
							$scope.data = data[0].indexfactor;
							$scope.level = data[0].level;
							console.log(data);
							return data;
						})
						.then(function(){
							console.log("succeed!");
						});
				};
			}
		}
	})
}