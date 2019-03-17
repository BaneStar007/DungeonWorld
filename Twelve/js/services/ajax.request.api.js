'use strict';

siteVisitForm.service('ajaxRequestApi', ['$http', function ($http) {


    this.getmy = function (db, id = null) {

        //console.log("getting ID: " + id + " from " + db);

        var urlString = "./api/ajax.request.api.php";

        switch (id) {
            case 1 : urlString = "./api/ajax.request.api.php";
            break;
            case 2 : urlString = "./api/maxima.sitevisitform.php";
            break;
            case 3 : urlString = "./api/ajax.request.api.php";
            break;
            case 4 : urlString = "./api/ajax.request.api.php";
            break;
            case 5 : urlString = "./api/ajax.request.api.php";
            break;
            default : urlString = "./api/ajax.request.api.php";
            break;
        }

        var req = {
            method: 'GET',
            url: urlString,
            headers: {
                'Content-Type': "application/json"
            }//,
            //data: { "getDB": db, "getID": id }
        };


        return $http(req);

    }


}]);