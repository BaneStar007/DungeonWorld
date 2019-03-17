'use strict';

char.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/main", {
            templateUrl: "index.html"
        })
        .when("/create", {
            templateUrl: "create.htm"
        })
        .when("/red", {
            templateUrl: "sitevisitform.htm",
            controller: "siteVisitForm"
        })
        .when("/green", {
            templateUrl: "sitevisitform.htm",
            controller: "siteVisitForm"
        })
        .when("/blue", {
            templateUrl: "sitevisitform.htm",
            controller: "siteVisitForm"
        });
});