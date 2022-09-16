var ExponentiationService = angular.module('ExponentiationService', [])
.service('Exponentiation', function () {
    this.sqaure = function (x) { return (x**2).toFixed(2) };
});