'use strict';

var siteVisit = angular.module('siteVisitWrapper', ['ngRoute']);


siteVisit.controller('siteVisitWrapper', ['$scope', '$http', '$timeout', '$window', '$location', function ($scope, $http, $timeout, $window, $location) {

    var SVF = $scope;

    this.$onInit = function () {
        $location.path('main');
    };

    SVF.forms = [{ "name": "Instructions", "url": "create", "popout": "none" },
    { "name": "Create New", "url": "create", "popout": "none" },
    { "name": "Form1", "url": "1", "popout": "new" },
    { "name": "Form2", "url": "2", "popout": "new" },
    { "name": "Form3", "url": "3", "popout": "new" },
    { "name": "Warrior", "url": "Warrior", "popout": "none" },

    ];
    $scope.changeRoute = function (newRoute, type) {
        if (type == "new") {
            PopupCenter("sitevisitform.htm?id=" + newRoute, '__blank', 'height=960, width=640, screenX=0, screenY=100');

        } else {
            $location.path(newRoute);
        }
    }

    // token.gettoken().then(function (data) {

    //     SVF.token = data.data.token;
    //     console.log(SVF.token);
    // })

}]);

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

var test = "bob";