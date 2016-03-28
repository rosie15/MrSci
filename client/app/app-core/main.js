module.exports = function(ngModule) {
	ngModule
	.controller("MainCtrl", function($scope, $http) {
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
	.directive("main", function() {
		require("./main.less");
		return {
			restrict: "E",
			template: `
				<banner></banner>
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<form>
								<div class="form-group">
									<label for="queryName"></label>
									<input ng-model="journalName" placeholder="请输入期刊名称" class="form-control" id="queryName">
								</div>
							</form>
							<select ng-model="orderProp" class="form-control">
								<option value="level">按分区由高往低</option>
								<option value="subject">按类别排序</option>
							</select>
							<br>
							<button ng-click="findJournal()" class="btn btn-primary">search</button>
							<br>
							<form>
								<div class="form-group">
									<label for="querySubject"></label>
									<input ng-model="journalSubject" placeholder="请输入期刊领域" class="form-control" id="querySubject">
								</div>
							</form>
								<select ng-model="orderProp" class="form-control">
									<option value="level">按分区由高往低</option>
									<option value="indexfactor">按影响因子排序</option>
								</select>
								<br>
							<button ng-click="findSubject()" class="btn btn-primary">search</button>

						</div>
						<div class="col-md-6 col-md-offset-1" id="journal-list">
							<ul class="list-unstyled">
								<li ng-repeat="journal in journals | orderBy: orderProp">
									<h3 class="bg-primary">{{ journal.name }}</h3>
									<div>{{ journal.level }}</div>
									<div>{{ journal.indexfactor }}</div>
									<div>{{ journal.subject }}</div>
								</li>
						    </ul>
						</div>
					</div>
				</div>
				<footer></footer>
			`,
			controller: "MainCtrl"
		}
	})
}