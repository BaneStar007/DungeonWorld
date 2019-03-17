'use strict';

var siteVisitForm = angular.module('siteVisitForm', []).config(function($locationProvider) {$locationProvider.html5Mode(true);})

siteVisitForm.controller('siteVisitForm', ['$scope', '$http', '$timeout', '$window', '$location', 'ajaxRequestApi', 'chipOnlineApi', '$sce',function ($scope, $http, $timeout, $window, $location, ajaxRequestApi, chipOnlineApi, $sce) {


   
    var SVF = this;
    var paramValue = 1;

    if (window.opener) {
    $scope.test = window.opener.test; // Grabs the Token & BusinessID & Consultant ID from the parent window
    } else {
        $scope.test = {};
    }
    
    var paramValue = $location.search().id; // Gets the ID from the URL
    var EmployeeArray = [];
   
    this.$onInit = function () {

        chipOnlineApi.gettoken().then(function (data) {

            SVF.token = data.data.token;
            //console.log(SVF.token);
        })

       
        

        ajaxRequestApi.getmy('sitevisit', paramValue).then(function (data) {
            //  //console.log(data);
            $scope.pageData = data.data;

            var rowLength =0;

            var pageDataLength = $scope.pageData.length;
            
            for(var pd = 0; pd < pageDataLength; pd++) {

                var sectionDataLength = $scope.pageData[pd].sections.length;

                for(var sd = 0; sd < sectionDataLength; sd++) {

                    var rowDataLength = $scope.pageData[pd].sections[sd].rows.length;

                    for(var rd = 0; rd < rowDataLength; rd++) {
                
                      //  console.log($scope.pageData[pd].sections[sd].rows[rd].width);
                        
                        rowLength += $scope.pageData[pd].sections[sd].rows[rd].width;
                        if (rowLength >= 12) {
                            rowLength = 0;
                            $scope.pageData[pd].sections[sd].rows[rd].rowEnd = true;
                  //          console.log("Completed Row"); 
                        }

                        
                    } // RowDataLength Loops
                } // SectionDataLength Loops
            } // pageDataLength Loop
   //         console.log("sitevisit");
        });

    };

    $scope.searchUsers = function(token, searchName) {
        //console.log(token);
        chipOnlineApi.searchUser(token, searchName).then(function(data){

      //      console.log(data.data[0].Result.data);
            return data.data[0].Result.data;
        },function(data){
            console.log(data);
        });
    }   

    $scope.dynamicFunction = function(functionName, dataPointer) {
        console.log("DYNAMIC FUNCTION", functionName, dataPointer);
        $scope[functionName](dataPointer);
    }

    

    $scope.EmployeeList =  function(dataPoint) {

       

   //     console.log(dataPoint);
    
        var searchName = null;
        


        searchName = $scope.sitevisitinsert.lookup_EdtApprentice.$modelValue || "";

    //    console.log(searchName);

        if (searchName.length >= 3) {

            dataPoint.loading = true;

        chipOnlineApi.searchUser(SVF.token, searchName).then(function(data){

          //  console.log(data.data[0].Result.data);

            dataPoint.autoCompleteList = angular.copy(data.data[0].Result.data);
            dataPoint.searchText = searchName;
            
        },function(data){
            console.log("Error",data);
        }).then(function(result){
            dataPoint.inputFocused = true;
            dataPoint.loading = false;
            
        });
    }
    dataPoint.inputFocused = true;
    }

    $scope.EmployeeChosen = function(dataPoint) {

       
        chipOnlineApi.loadUser(SVF.token, dataPoint.autoCompleteList[0].EMP_ID).then(function(data){

            var pageDataLength = $scope.pageData.length;
            
            for(var pd = 0; pd < pageDataLength; pd++) {

                sectionDataLength = $scope.pageData[pd].sections.length;

                for(var sd = 0; sd < sectionDataLength; sd++) {

                    rowDataLength = $scope.pageData[pd].sections[sd].rows.length;

                    for(var rd = 0; rd < rowDataLength; rd++) {
                
                        $scope.pageData[pd].sections[sd].rows[rd].data = data.data[$scope.pageData[pd].sections[sd].rows[rd].id];
                    } // RowDataLength Loops
                } // SectionDataLength Loops
            } // pageDataLength Loop

        });
       
    }

    $scope.HostList = function(dataPoint) {

        console.log("HOST List");
    }
    

    

}]);

siteVisitForm.filter('highlight', [ '$sce', function($sce) {
    return function(text, phrase) {
       
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(text)
    }
  }]);


