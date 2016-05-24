(function () {
	'use strict';
	angular
		.module('horizonModuleDemo')
		// Init the assets path and the API url.
		// Only done once
		.controller('MainController', function ($rootScope, FaveeoApiConfig) {
			$rootScope.assetsPath = 'assets';
			FaveeoApiConfig.init('https://again.faveeo.com');
		});
})();
