'use strict'; 

 var app = angular.module('Rules', []);



  app.controller('Printer', function ($scope, $http) {

    $scope.printView = true;

    $scope.closeBox = true;

    $scope.clockconfig = { width: 100, height: 100, size: 90,type: 1};



    $scope.optionData = {

      'availableOptions': [{ "name": "title", 'id': '1' },

      { "name": "NPC", 'id': '2' },

      { "name": "item", 'id': '3' },

      { 'name': 'text', 'id': '4' }]

    };

    $scope.chapterShow = [true, true, true, true, true]



    $http.get("page.json")

      .then(function (response) {

        $scope.data = response.data;

        $scope.pages = response.data;

        $scope.chapters = response.data.chapters;

        $scope.chats = response.data.chats;

        

      });

      



    $scope.printViewChange = function () {

      $scope.printView = !$scope.printView;

    }

    $scope.addPage = function() {

      console.log($scope.pages);

      $scope.pages.data.push({

        "chapter" : 1,

        "pageType": { "name": "title", "id": "1" },

        "subtitle": "blank Page",

        "image": "",

        "show": true

        });



    }

  });

