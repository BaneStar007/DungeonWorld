'use strict';

// Creates the Component for all <modal> tags to recognise
indexForm.component('autoComplete', {
    transclude: true,
    templateUrl: 'js/components/autoComplete.template.html',
    bindings: {
        placeholder: '@',
        //requestapi: '@',
        nameandid: '=',
        localclass: '@',
        datam: '=',
        listitems: '='        
    },
    controller: function($scope, $http) {
        // NOTE, Controller Function will re-run everytime component becomes visible (its recreated), change from ng-if to ng-show if not desired ( )
        ac = this;

        ac.$onInit = function() {
        //    console.log(ac.requestapi);
           

        // ajaxRequestApi.getmy(ac.requestapi).then(function(data) {
        //     console.log(data);
        //     ac.listItems = $window.angular.copy(data.data); 
           
        // });
      //  console.log(ac.listitems);
        
        }
        
            
        

       

        

        ac.clearForm = function() {
            alert ("form to be cleared");
        }
        
        ac.addNewClient = function() {
            alert("add New Client");
        }

        ac.saveButton = function() {

            ac.savefunction();
        }
    },
    controllerAs: 'AC'


});

// var req = {
            //     method: 'POST',
            //     url: './ajax/ajax.request.api.php',
            //     headers: {
            //       'Content-Type': "application/json"
            //     },
            //     data: { "getID" : ac.requestapi}
            //    };
            // $http(req).then(function(response){
            //     // success
            //     console.log(response);
            //     ac.listItems = response.data;

            // }, function(error) {
            //     // error
            // })  

