'use strict';

// Creates the Component for all <modal> tags to recognise
indexForm.component('modal', {
    transclude: true,
    //template: ' Hello {{$ctrl.title}}',
    //templateUrl: 'modal_template.html',
    //templateUrl: 'modal_template.html',
    //templateUrl: 'modal_template.html',
    templateUrl: 'js/components/modal_template.html',
    bindings: {
        title: '@',
        visible: '=',
        savetitle: '@',
        savefunction: '&',
        error: '='
    },
    controller: function() {
        // NOTE, Controller Function will re-run everytime component becomes visible (its recreated), change from ng-if to ng-show if not desired
        mc = this;
       
        //console.log(mc.visible);

        mc.closeModal = function() {
            mc.visible = false;
        }

        mc.clearForm = function() {
            alert ("form to be cleared");
        }
        
        mc.addNewClient = function() {
            alert("add New Client");
        }

        mc.saveButton = function() {

            mc.savefunction();
        }
    },
    controllerAs: 'MC'


});

