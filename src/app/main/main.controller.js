(function() {
  'use strict';
  angular
    .module('horizonModuleDemo')
    .controller('MainController', function($rootScope, FaveeoApiConfig) {
		$rootScope.assetsPath = 'assets';
		FaveeoApiConfig.init('https://again.faveeo.com');
	});
})();
