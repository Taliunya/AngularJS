angular.
module('myApp').
config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.when('/catalog', {
            template: '<products></products>'
        }).when('/contactus', {
            template: '<contact-us></contact-us>'
        }).when('/home', {
            template: '<home></home>'
        }).when('/auth', {
            template: '<authentication></authentication>'
        }).when('/', {
            template: '<register></register>'
        }).otherwise('/home')
    }
]);