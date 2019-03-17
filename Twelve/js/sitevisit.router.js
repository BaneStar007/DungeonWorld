'use strict';

siteVisit.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.htm"
        })
        .when("/main", {
            templateUrl: "main.htm"
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