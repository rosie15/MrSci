module.exports = function(ngModule) {
	ngModule.directive("journalCover", function() {
		require("./journal-cover.less");
		return {
			restrict: "E",
			template: "<h2>To be uploaded</h2>",
			controllerAs: "coverCtrl",
			controller: function() {
				//to add controller
			}
		}
	})
}