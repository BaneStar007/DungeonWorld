'use strict';

// The Directive for The Form Inputs, which trigger Lookups and populate dropdowns
siteVisitForm.directive('formInput', [ '$timeout', '$sce',function($timeout, $sce) {
    return {
        restrict: 'E',
    transclude: true,
    templateUrl: 'js/directives/forminput.template.html',
    scope: {
        config: '=',
        callFunction: '&',
        populateFunction: '&'
    },
    link: function(scope) { 

        var v = "THIS IS NOT BEING USED IN CODE JUST YET!!!";
        
        var fi = scope;
        fi.data = {};
        fi.hidden = {};
        fi.input = {};
        fi.labelrow = 3;
        fi.rows = 9;

        console.log(fi.config);
        console.log(fi.callFunction);
        console.log(fi.populateFunction);
        
        
        fi.autoCompleteList = [];

        fi.localFunction = function() {
            fi.callFunction();
          }
    
          fi.populate = function(val) {   
            
            fi.data[fi.config.id] = val.employeeName;
            fi.hidden[fi.config.id] = val.EMP_ID;
            fi.config.inputFocused = false;
            fi.populateFunction(this);
          }
          
    
    
          fi.inputFocus = function() {
            fi.config.inputFocused = true;
            
          }
          fi.inputBlur = function() {
              console.log("Blur in 3..2..1");
              $timeout(function(){
    
                fi.config.inputFocused = false;
    
              },100);
            
          }
        

        // Width Configuration.
        if (fi.config && fi.config.width) {        
            fi.widthClass = "col-"+fi.config.width;
        } else {
            fi.widthClass = "col-12";
        }

    },



};

}]);

