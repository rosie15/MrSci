module.exports = function(ngModule) {
	ngModule.directive("footer", function() {
		require("./footer.less");
		return {
			restrict: "E",
			template: `
				<div class="container bg-primary" id="footer">
				    GOT ANY SUGGESTION?
				    CONTACT ME VIE THE FOLLOWING WAYS
				</div>
			`,
			controllerAs: "footerCtrl",
			controller: function() {
				//to do
			}
		}
	}) 
}