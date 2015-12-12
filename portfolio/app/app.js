'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.photoLink',
  'myApp.application',
  'myApp.contact'
])

.config(['$routeProvider', function($routeProvider) {
  // console.log();
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
