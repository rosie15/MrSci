module.exports = function(ngModule) {
	ngModule.directive("main", function() {
		require("./main.less");
		return {
			restrict: "E",
			template: `
				<input ng-model = "MainCtrl.queryJournal" />
				<button ng-click="MainCtrl.getData()">查询</button>
				<span>{{ MainCtrl.queryJournal }}</span>
				<br>
				<div>影响因子</div>
				<span>{{ MainCtrl.queryJournal }}</span>
			`,
			controllerAs: "MainCtrl",
			controller: function() {
				this.queryJournal = "ACAD MED";

				this.getData = function() {
					alert("Hello world");
					return fetch("/journal/ACAD MED")
						.then(function(res) {
							return res.json();
						})
						.then(function(data){
							return data;
						})
				};

				this.data = this.getData();
				console.log(this.data);
			}
		}
	})
}