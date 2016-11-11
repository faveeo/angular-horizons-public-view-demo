
(function() {
	'use strict';
	angular
		.module('horizonModuleDemo')
		.config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/state1");
		$stateProvider
			.state('state1', {
				url: "/state1",
				templateUrl: "app/state1/state1.tpl.html",
				controllerAs: "State1Controller"
			})
			.state('state2', {
				url: "/state2",
				templateUrl: "app/state2/state2.tpl.html",
				controllerAs: "State2Controller"
			})
			.state('state3', {
				url: "/state3",
				templateUrl: "app/state3/state3.tpl.html",
				controllerAs: "State3Controller"
			});
	});
})();