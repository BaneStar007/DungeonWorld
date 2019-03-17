'use strict';

// Creates the Component for all <modal> tags to recognise
siteVisitForm.directive('formRow', [ '$timeout', '$sce',function($timeout, $sce) {
    return {
        restrict: 'E',
    transclude: true,
    templateUrl: 'js/directives/formrow.template.html',
    scope: {
        title: '@',
        config: '=',
        data: '=',
        callFunction: '&',
        populateFunction: '&'
        
    },
    link: function(scope) {
        // NOTE, Controller Function will re-run everytime component becomes visible (its recreated), change from ng-if to ng-show if not desired
        
        var fr = scope;
        fr.borderClass="";
        fr.titleClass="";
        fr.hidden = {};
        fr.input = {};
        // Default to a 3/9 format unless config is defined.
        fr.labelRow = 4;
        
        fr.rows = 8;
        fr.autoCompleteList = [];

        // If Title Width is Declared, set the Field Column appropriately
        if (fr.config.titleWidth) {
            fr.labelRow = fr.config.titleWidth; 
            fr.rows = 12 - fr.config.titleWidth;
            fr.forcedWidth = true;
        } else {
            fr.forcedWidth = false;
        }
        
        // If a Title Exists, and its length is too big for the Box, make it a double row class
        if (fr.title) {
            if (fr.config.titleClass) {
                fr.titleClass += fr.config.titleClass;
            }
            if (fr.title.length > (fr.labelRow * 4)) {
                fr.titleClass += " doubleRow ";
                fr.titleROWS = "" + fr.title.length + " > " + fr.labelRow;
            }
        }
        

        // Generic, if config is declared
    if (fr.config) { 
           
       // Border confirguration default start
       if (fr.config.border) {
            if (fr.config.border == "normal") {
                fr.borderBottom = true;
                fr.borderRight = true;
            }
            if (fr.config.border == "row") {
                fr.borderBottom = true;
            }
            if (fr.config.border == "column") {
                fr.borderRight = true;
            }
        }

        // Width Configuration. & border mod
        if (fr.config.width) {        
            fr.widthClass = "col-"+fr.config.width;
            if (fr.config.width == 12) {
                fr.borderRight = true;
            }
        } else {
            fr.widthClass = "col-12";
            fr.borderRight = true;
        }

       
        // If Last Child, add bottom border
        if (fr.config.lastChild) {
            fr.borderBottom = true;
            fr.borderRight = true;
        }
        if (fr.config.rowEnd) {
            fr.borderRight = true;
        }

        // Once all the borders have been defined, Add the class
        if (fr.borderBottom == true) {
            fr.borderClass +=" borderbottom ";
        }
        if (fr.borderRight == true) {
            fr.borderClass +=" borderright ";
        }
 
        

    // Based on the type of the
        switch(fr.config.type) {

            case 'tick' : fr.idName = 'chk_'+fr.config.id;
            break;
            case 'date' : 
            fr.idName = 'date_'+fr.config.id;
            if (!fr.forcedWidth) {
                fr.labelRow = 3; 
                fr.rows = 9;
            }
            break;
            case 'input' : fr.idName = 'input_'+fr.config.id;
            break;
            case 'text' : fr.idName = 'text_'+fr.config.id;
            break;
            
            case 'comment' : 
            fr.borderClass += " comment ";
            
            fr.idName = 'textfill_'+fr.config.id;
            break;
            case 'commentarea' : fr.borderClass += " commentArea ";
            if(!fr.forcedWidth) {
                fr.labelRow = 12; 
                fr.rows = 12;
            }
            fr.inputrows = 4;
            fr.idName = 'textfill_'+fr.config.id;
            break;

            case 'textfieldpostfil' : fr.idName = 'textfill_'+fr.config.id;
            break;

            case 'inputfieldpostfil' : fr.idName = 'textfill_'+fr.config.id;
            break;

            
            default : fr.idName = 'fallback_'+fr.config.id;
            break;
        }
            

        // Field Configuration
        if(Array.isArray(fr.config.radioTitles)) {
            
           
            fr.rows = Math.floor((12 / (fr.config.radioTitles.length)),0);
            fr.config.radioTitles.forEach(val => {
                fr.input += "Radio Button";
            });
            
        }
        if(Array.isArray(fr.config.tickBoxes)) {
            
            
            fr.rows = Math.floor((9 / (fr.config.tickBoxes.length)),0);
            fr.input.data = fr.config.tickBoxes;
        }

    } 
    //IFConfig has been defined   
        

        fr.onChanged = function (changes) {
            if (changes.inputfieldlookup) {
                console.log("Changed");
            }
        }   


        // Input Field with Ajax
        fr.localFunction = function() {
            fr.callFunction();
        }
    
        fr.populate = function(val) {   
            
            fr.data[fr.config.id] = val.employeeName;
            fr.hidden[fr.config.id] = val.EMP_ID;
            fr.config.inputFocused = false;
            fr.populateFunction(this);
        }
          
    
    
        fr.inputFocus = function() {
            fr.config.inputFocused = true;
            
        }
        
        fr.inputBlur = function() {
            console.log("Blur in 3..2..1");
            $timeout(function(){
    
            fr.config.inputFocused = false;
    
            },100);
            
        }

        
    },



    };

}]);

