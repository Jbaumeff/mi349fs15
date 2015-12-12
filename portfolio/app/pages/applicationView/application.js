'use strict';

angular.module('myApp.application', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/key', {
    templateUrl: 'pages/applicationView/key.html',
    controller: 'ApplicationCtrl'
  });

  $routeProvider.when('/star', {
    templateUrl: 'pages/applicationView/star.html',
    controller: 'ApplicationCtrl'
  });

  $routeProvider.when('/solid', {
    templateUrl: 'pages/applicationView/solid.html',
    controller: 'ApplicationCtrl'
  });

  $routeProvider.when('/yolt', {
    templateUrl: 'pages/applicationView/yolt.html',
    controller: 'ApplicationCtrl'
  });
}])

.controller('ApplicationCtrl', function($scope) {

  $scope.games = {
    "Star Hunter": "starPhoto",
    "Solid State": "solidPhoto",
    "YOLT": "yoltPhoto"
  };

  $scope.apps = {
    "Key Play": "keyPhoto"
  }

  $scope.getClass = function(index) {
    return index % 2 == 0 ? "photoLink floatLeft" : "photoLink floatRight";
  }
});
