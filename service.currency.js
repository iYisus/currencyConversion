angular
.module('currencyApp')
.service('CurrencyService', CurrencyService);

CurrencyService.$inject = ['CurrencyFactory', '$rootScope'];

function CurrencyService(CurrencyFactory, $rootScope){
	var vm = this;
	return {
		getCurrency:getCurrency
	}

	function getCurrency(vm){
        CurrencyFactory.apiResponse().get().$promise.then(
			function(response){
				vm.currency = response;
				$rootScope.$broadcast("currency");
			},
			function(err){
				console.log("error");
			}
		);
	}
}