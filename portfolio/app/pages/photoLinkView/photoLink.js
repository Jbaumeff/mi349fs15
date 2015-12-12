'use strict';

angular.module('myApp.photoLink', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/games', {
    templateUrl: 'pages/photoLinkView/games.html',
    controller: 'PhotoLinkCtrl'
  });

  $routeProvider.when('/apps', {
    templateUrl: 'pages/photoLinkView/apps.html',
    controller: 'PhotoLinkCtrl'
  });
}])

.controller('PhotoLinkCtrl', function($scope, $location) {
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

  $scope.changePath = function(path) {
    if(path == "starPhoto") {
      $location.path('/star');
    }

    if(path == "solidPhoto") {
      $location.path('/solid');
    }

    if(path == 'yoltPhoto') {
      $location.path('/yolt');
    }

    if(path == "keyPhoto") {
      $location.path('/key');
    }
  }
});
