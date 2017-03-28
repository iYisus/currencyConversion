angular.module('currencyApp')
.controller('currencyController', ['$scope','$http','CurrencyService', function ($scope,$http, CurrencyService) {
	var vm = this;
	$scope.conversion = " ";
	getCurrency = CurrencyService.getCurrency(vm);
	$scope.$on("currency", function(){
		$scope.rates= vm.currency.rates;
        $scope.from= vm.currency.rates.AUD;
		$scope.to = vm.currency.rates.USD;
		$scope.value = 1;
	});

	$scope.calculate = function(){
		$scope.conversion = $scope.value * ($scope.to * (1 / $scope.from));
	};
}]);