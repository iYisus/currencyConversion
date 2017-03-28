angular
.module('currencyApp')
.factory('CurrencyFactory', CurrencyFactory);

CurrencyFactory.$inject = ['$rootScope','$resource'];

function CurrencyFactory($rootScope, $resource){
    
    return {
        apiResponse : apiResponse
    }

    function apiResponse(){
        return $resource('http://api.fixer.io/latest?base=ZAR');
     }
}