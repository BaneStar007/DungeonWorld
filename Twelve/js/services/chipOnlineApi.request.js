'use strict';

siteVisitForm.service('chipOnlineApi', ['$http', function ($http) {

    var HOST = "http://staging-api.chiponline.com.au/api/";

    this.gettoken = function () {

        var myData = { "username": "bannister", "password": "$chouse44", "failedCount": 0, "rememberMe": false };
        //console.log(HOST);

        var req = {
            method: 'POST',
            url: HOST + 'UserAuthentication/login',
            headers: {
                'Content-Type': "application/json",
                // 'Access-Control-Allow-Origin': 'http://staging-portal.chiponline.com.au'
            },
            data: myData
        };

        return $http(req);

    }

    // Only Searches with Surname
    this.searchUser = function(token, surname) {

        // var query = {"query":"{\"SearchQuery\":{\"EMP_ID\":null,\"EMP_USERREFERENCE\":null,\"EMP_SURNAME\": \""+surname+"\",\"EMP_GIVENNAMES\":null,\"EMPLOYEENAME\":null,\"EMP_SALUTATION\":null,\"EMP_PHONE\":null,\"EMP_MOBILE\":null,\"EMP_EMAIL\":null,\"EMP_ADDRESSLINE1\":null,\"EMP_SUBURB\":null,\"EMP_STATE\":\"\",\"EMP_POSTALPOSTCODE\":null,\"EMP_USERSTATUS_KEY\":0,\"EMP_CONSULTANT_KEY\":0,\"ECS_NAME\":null,\"ECS_PHONE1\":null,\"ECS_PHONE2\":null,\"ECS_EMAIL\":null,\"ECS_POSITION\":null,\"EMP_ACTIVE\":\"T\",\"EMP_OTSREGISTERED\":\"\",\"EMP_APPLICANT\":\"\",\"EMP_APPRENTICESHIP\":null,\"EMP_CASUAL\":null,\"EMP_CONTRACT\":null,\"EMP_FULLTIME\":null,\"EMP_PARTTIME\":null,\"EMP_PERMANENTPT\":null,\"EMP_SCHOOLBASED\":null,\"EMP_TRAINEE\":null,\"currentEmployee\":null,\"previousEmployee\":null,\"EMP_CREATIONDATE\":null,\"ECN_CONTACTDATE\":null,\"EMP_CLASSIFICATION\":null,\"EMP_SUBCLASSIFICATION\":null,\"EMP_POSTCODE\":null,\"EMP_GENDER\":null,\"EMP_CLIENT_KEY\":null,\"age\":null,\"EMP_GRADE\":null,\"EMP_SHIFT_KEY\":null,\"EMP_STARTDATE\":null,\"EMP_SUSPENDED\":null,\"empSelect\":null},\"pageQuery\":{\"pageIndex\":1,\"pageRow\":10,\"orderColumn\":\"EMP_SURNAME\",\"orderType\":\"Asc\"}}"};
        var query = {"query":"{\"SearchQuery\":{\"EMP_SURNAME\": \""+surname+"\",\"EMP_CLIENT_KEY\":null,\"EMP_SHIFT_KEY\":null},\"pageQuery\":{\"pageIndex\":1,\"pageRow\":10,\"orderColumn\":\"EMP_SURNAME\",\"orderType\":\"Asc\"}}"};

        var  req = {
            method: 'POST',
            url: HOST + "Employees/search",
            headers: {
                'Content-Type': "application/json",
                "x-application-module" : 34,
                "Authorization" : token,
                'Access-Control-Allow-Origin': 'http://staging-portal.chiponline.com.au'
                
            },
            data: query
        };

        return $http(req);

    }

    this.loadUser = function(token, employeeID) {

        var  req = {
            method: 'GET',
            url: HOST + "Employees/"+employeeID,
            headers: {
                'Content-Type': "application/json",
                "x-application-module" : 34,
                "Authorization" : token,
                'Access-Control-Allow-Origin': 'http://staging-portal.chiponline.com.au'
                
            }
        };

        return $http(req);

    }


}]);