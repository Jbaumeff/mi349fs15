'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'pages/contactView/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', function($scope) {
  $scope.sendEmail = function() {
    window.open('mailto:baumjeff@msu.edu');
  }
});
