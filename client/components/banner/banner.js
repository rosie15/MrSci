module.exports = function(ngModule) {
	ngModule.directive("banner", function() {
		return {
			restrict: "E",
			template: "<h1 class='container'> MrSci for Nanjing University</h2>",
			controllerAs: "coverCtrl",
			controller: function() {
				//to do
			}
		}
	}) 
}