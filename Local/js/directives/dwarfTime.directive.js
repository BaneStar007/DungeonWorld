'use strict';

// The Directive for The Form Inputs, which trigger Lookups and populate dropdowns
char.directive('dwarfTime', [ '$interval', '$sce',function($interval, $sce) {
    return {
        restrict: 'EA',
    transclude: true,
    templateUrl: 'js/directives/dwarfTime.template.html',
    scope: {
        config: '=',
        format: '='
    },
    link: function(scope, element, attr) { 

        var EarthTime = Date.now();

        var divideDwarfMiniSeconds = 10;
        var divideDwarfSeconds = 10;
        var divideDwarfMinutes = 10;
        var divideDwarfHours = 10;
        var divideDwarfShifts = 10;
        var divideDwarfDays = 10;
        var divideDwarfMonths = 10;

        console.log(scope);
        console.log(attr);

        if (attr.config && attr.config.city != null) 
        {
            scope.city = attr.config.city;
            
        } else {
            // default to the Capital
            scope.city = "Karn Torug"; 
        }

        

        $interval(function(){

            EarthTime = Date.now();

            scope.dwarfTime = findNewClock(EarthTime);

        }, 1000);

        function findNewClock(EarthTime) {

            var CoynTime = EarthTime;
            var dateObject = 0;


        // The World was invented in 1990, Yet time before existed
        EarthTime -= 634820235000; // Feb 12th, 1990, Art
        // So grab the time from then

        // First, EarthRealTime to CoynRealTime
        CoynTime = ( EarthTime / 604800 ) * 3628888;
        // Divide by 604800 which is 1 week.
        // Multiple by the 6.00001 modifier

        FullSecs = Math.floor(CoynTime / divideDwarfMiniSeconds);
        FullSecs


        if (attr.format) {
           
            switch(attr.format) {
                case 'fullDate' :
                    dateObject = CoynTime;
                break;
                default :
                    dateObject = CoynTime;
                break;
            
            }
        }

        return dateObject;
        }


        
        
       

        }
    }

}]);

