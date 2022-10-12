'use strict';

angular.module('myApp', [
  'ngRoute',
  'authentication',
  'products',
  'contactus',
    'home',
    'header',
    'register',
    'ngMaterial'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
}]);
