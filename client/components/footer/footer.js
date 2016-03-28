module.exports = function(ngModule) {
	ngModule.directive("footer", function() {
		require("./footer.less");
		return {
			restrict: "E",
			template: `
				<div class="container bg-primary" id="footer">
				    <p>GOT ANY SUGGESTION?</p>
				    <p>CONTACT ME VIE THE FOLLOWING WAYS</p>
				</div>
			`,
			controllerAs: "footerCtrl",
			controller: function() {
				//to do
			}
		}
	}) 
}