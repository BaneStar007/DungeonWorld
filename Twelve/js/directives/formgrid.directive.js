'use strict';

// Creates the Component for all <modal> tags to recognise
siteVisitForm.directive('formGrid', function() {
    return {
        restrict: 'E',
    transclude: true,
    templateUrl: 'js/directives/formgrid.template.html',
    scope: {
        title: '@',
        config: '=',
        function: '&'
    },
    link: function(scope) {
        // NOTE, Controller Function will re-run everytime component becomes visible (its recreated), change from ng-if to ng-show if not desired
        var fg = scope;
       
      

        fg.dataRows = fg.config.dataRows || ["test","test2"];
        
        
       
        fg.dataColumns = [];
        fg.borderClass = "-";
        console.log(fg.config);
        fg.borderClass = fg.config.gridborder;
        
        fg.dataColumnsExist = false;

        if (fg.config) {

            if (fg.config.border) {
                fg.borderClass = fg.config.border;
                
            }
            if (fg.config.gridborder) {
                fg.gridClass = fg.config.gridborder;
            }
            if (fg.config.sectionborder) {
                fg.sectionClass = fg.config.sectionborder;
                
            }
            if (fg.config.lastChild) {
                fg.sectionClass += " borderbottom";
            }

       

            // borders and Table Settings
            if (fg.config.dataRows) { 
                fg.tableClass = "full";
            
                console.log(fg.config); 

                // Unsure if this is directly needed yet

                // if (fg.config.dataRows.border) {
                //     if (fg.config.dataRows.border == "normal") {
                //         console.log("normal");
                //         fg.borderBottom = true;
                //         fg.borderRight = true;
                //     }
                //     if (fg.config.dataRows.border == "row") {
                //         fg.borderBottom = true;
                //     }
                //     if (fg.config.dataRows.border == "column") {
                //         fg.borderRight = true;
                //     }
                // }
        


            // First, IF the table data is in rows, keep as is, if in columns, a restructure needs to take place.

            // Each Cell in a table can be an input point for submission, saving or just printing

            // 


             // While this sets up an Empty Array, IF your Grid has no DataColumns, it will not be able to create a vertical Grid from Horizontal data.
            if(fg.config.dataSet == "vertical" && fg.config.dataColumns) {
                
                var tempDataRows = [];
                var maxLength =0;
                var cellValue = {};
                var thisCellValue = {};
                tempDataRows[0] = [];
                
               

                // Loop through the column headers to ensure a row exists for each, even if empty
                var tempLoop1 = fg.config.dataColumns.data.length;

                for(var cols=0; cols < tempLoop1; cols++) {
                    if ( fg.config.dataRows && fg.config.dataRows[cols].data) {

                maxLength = Math.max(maxLength, fg.config.dataRows[cols].data.length);
                    }
                }

                for (var rows=0; rows < maxLength; rows++) {
                    tempDataRows[rows] = [];   
                } 

                for(var cols=0; cols < tempLoop1; cols++) {
                    if (fg.config.dataRows && fg.config.dataRows[cols].data) {

                        // Now loop through each column and add each to each associated array location
                        tempDataRows[cols] = [];
                        
                        for(var rows=0; rows < maxLength; rows++ ){
        //                    console.log(fg.config.dataRows[cols].data[rows].value);

                            tempDataRows[rows][cols] = { "type": fg.config.dataRows[cols].type, "value" : fg.config.dataRows[cols].data[rows].value };
                        }

                    } else {
                        console.log(fg.config.dataRows[cols]);
                        switch(fg.config.dataRows[cols].type) {
                            case "twinput" :
                            cellValue = fg.config.dataRows[cols];
                            break;

                            case "textfill" :
                            cellValue = fg.config.dataRows[cols];
                            break;

                            default :
                            cellValue = fg.config.dataRows[cols];

                            break;
                        }

                        for(var rows=0; rows < maxLength; rows++ ){

                            thisCellValue = {};
                            thisCellValue = JSON.parse(JSON.stringify(cellValue))
                            thisCellValue.id += rows;
                            tempDataRows[rows][cols] = JSON.parse(JSON.stringify(thisCellValue));
                        }
                    }
                }

                fg.dataRows = tempDataRows;
            } else {

                // Data is formatted in a Horizontal Structure and will form itself.
                console.log(fg.config.dataRows[0]);
                var tempDataRows = [];

                // to confirm its only 1 columns
                if (fg.config.dataRows.length == 1) {
                    console.log(fg.config.dataRows[0].data);   
                    tempDataRows = fg.config.dataRows[0].data;

                    console.log(tempDataRows);
                    var dataLength = tempDataRows.length;

                    console.log(dataLength)
                    for (var i=0; i< dataLength; i++) {

                        console.log(fg.config.dataRows[0].type);
                        if (fg.config.dataRows[0].type == 'checkbox') {
                            console.log(fg.dataRows[i]);
                            tempDataRows[i] = {"label" : tempDataRows[i].value, "type" : "checkbox" };

                        }

                    }
                    console.log(fg.dataRows);
                    fg.dataRows = tempDataRows;

                }
            }

            
            
            if (fg.config.dataColumns && fg.config.dataColumns.data ) {

                fg.dataColumnsExist = true;
           //     console.log(fg.config.dataColumns.data);
                fg.dataColumns = fg.config.dataColumns.data;
            }

        }

        }

        
        // console.log(fg.borderClass);
        // if (fg.borderbottom) {
        //     fg.borderClass += " borderbottom ";
        //     console.log("BB", fg.borderClass);
        // }
        // if (fg.borderright) {
        //     fg.borderClass += " borderright ";
        //     console.log("BR", fg.borderClass);
        // }
        // console.log(fg.borderClass);

        
    },
    controllerAs: 'FR'
    };

});

