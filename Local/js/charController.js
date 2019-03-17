'use strict';

var char = angular.module('charCreate', ['ngRoute']);


char.controller('charCreate', ['$scope', '$http', '$timeout', '$window', '$location', function ($scope, $http, $timeout, $window, $location) {

    $scope.datObj = Date.now();


}]);
