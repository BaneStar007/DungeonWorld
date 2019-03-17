<?php
echo '[
    {
        "pageNo": 1,
        "showPage" : true,
        "instructions": "PageNo will be displayed in each page, showPage will toggle the header being shown on all pages or just the first, Each Page can have a title and logo in titleParts array",
        "titleParts": [
            {
                "type": "text",
                "title": "Apprentice / Trainee Field Visit Form",
                "width": 7
            },
            {
                "type": "logo",
                "logoURL": "chouse_logo_c.png",
                "width": 5
            }
        ],
        "sections": [
            {
                "border" : "innerTitle",
                "instructions" : "Should a section have its own border? page = extra margins, normal = no margins, thin = 1px only, and none for none",
                "rows": [
                    {   
                        "directive": "row",
                        "type": "tick",
                        "border": "none", 
                        "title": "Visit Type",
                        "width": 5,
                        "titleWidth" : 3,
                        
                        "disabled": false,
                        "instructions" : "For developers: Tickboxes defined with non matching IDs, will not populate",
                        "tickBoxes": [
                            {
                                "title": "Pastoral",
                                "id": "V_P"
                            },
                            {
                                "title": "Completion",
                                "id": "V_C"
                            }
                        ]
                    },
                    {
                        "directive": "row",
                        "type": "tick",
                        "border": "none", 
                        "title": "Contact By:",
                        "width": 4,
                        "disabled": true,
                        "tickBoxes": [
                            {
                                "title": "Phone:",
                                "checked" : false,
                                "id": "C_P"
                            },
                            {
                                "title": "Visit",
                                "checked" : true,
                                "id": "C_V"
                            }
                        ]
                    },
                    {
                        "directive": "row",
                        "type": "date",
                        "title": "Date:",
                        "id" : "EdtDate",
                        "border": "none", 
                        "width": 3
                    },
                    {
                        "directive": "row",
                        "type": "textfieldpostfil",
                        "title": "Consultant",
                        "id": "EdtConsultant",
                        "border": "none", 
                        "width": 12
                    },
                    {
                        "instructions" : "------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->>>>",
                        "directive": "row",
                        "type": "inputfieldlookup",
                        "function": "EmployeeList",
                        "popfunc": "EmployeeChosen",
                        "options" : { "debounce" : 1000 },
                        "title": "Apprentice Name",
                        "id": "EdtApprentice",
                        "border": "none", 
                        "width": 12,
                        "data" : {}
                    },
                    {
                        "directive": "row",
                        "type": "tick",
                        "border": "none", 
                        "title": "Drive Lic Current:",
                        "width": 4,
                        "titleWidth" : 4,
                        "disabled": true,
                        "tickBoxes": [
                            {
                                "title": "Yes",
                                "checked" : false,
                                "id": "DL_Y"
                            },
                            {
                                "title": "No",
                                "checked" : false,
                                "id": "DL_N"
                            }
                        ]
                    },
                    {
                        "directive": "row",
                        "type": "textfieldpostfil",
                        "title": "Total Allowance Owing:",
                        "id": "PostAllowance",
                        "border": "none", 
                        "width": 4,
                        "titleWidth" : 6
                    },
                    {
                        "directive": "row",
                        "type": "textfieldpostfil",
                        "title": "Annual Leave Due:",
                        "id": "PostAnnualLeave",
                        "border": "none", 
                        "titleWidth" : 6,
                        "width": 4
                    },
                    {
                        "instructions" : "------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->>>>",
                        "directive": "row",
                        "type": "inputfieldlookup",
                        "function": "HostList",
                        "title": "Host Employer",
                        "id": "EdtHost",
                        "border": "none", 
                        "width": 11
                    },
                    {
                        "instructions" : "------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->>>>",
                        "directive": "row",
                        "type": "buttonfieldlookup",
                        "function": "ShowHostList",
                        "title": "Show",
                        "id": "ShowHost",
                        "border": "none", 
                        "width": 1
                    },
                    {
                        "directive": "row",
                        "type": "textfieldpostfil",
                        "title": "Business Addresss",
                        "id": "EdtAddress",
                        "border": "none", 
                        "width": 12,
                        "data" : null
                    },
                    {
                        "directive": "row",
                        "type": "date",
                        "title": "Workplace Hazard Inspection due by Date:",
                        "id": "WPHI",
                        "border": "none", 
                        "width": 9
                    },
                    {
                        "directive": "row",
                        "type": "date",
                        "title": "RDO",
                        "id": "empRDonextZeroDate",
                        "border": "none", 
                        "width": 3
                    },
                    {
                        "directive": "row",
                        "type": "textfieldpostfil",
                        "title": "Classification:",
                        "id": "CL",
                        "border": "none", 
                        "width": 9
                    },
                    {
                        "directive": "row",
                        "type": "textfieldpostfil",
                        "title": "Year Level:",
                        "id": "YL",
                        "border": "none", 
                        "width": 3
                    },
                    {
                        "directive": "row",
                        "type": "textfieldpostfil",
                        "lastChild" : true,
                        "title": "Supervisor:",
                        "id": "SUP",
                        "border": "normal", 
                        "width": 12
                    }

                ]
            },
            {
                "title": "Section #2",
                "border" : "outerTitle",
                "connection": "seperate",
                "rows": [
                    {
                        "directive": "grid",
                        "type": "gridBox",
                        "border" : "standard",
                        "gridborder" : "cellborder",
                        "dataSet":"vertical",
                        "title": "Workplace Feedback Legend",
                        "id": "empWorkplaceFeedback",
                        
                        "legend" : [
                            { "val": "1", "rating" : "Very Good"},
                            { "val": "2", "rating": "Good"},
                            { "val": "3", "rating": "Fair"},
                            { "val": "4", "rating": "Poor"}
                        ],
                        "legend2" : [
                            { "val": "A/T", "rating": "Apprentice / Trainee"},
                            { "val": "S", "rating": "Supervisor"}
                        ],
                        "dataColumns" : {  "border" : "normal",
                            "data" : [  
                                { "title" : "Criteria", "colspan" : "1" },
                                { "title" : "Assessment n A/T  S", "colspan" : "1" },
                                { "title" : "Comments", "colspan" : "2" }],
                            "instructions" : "not yet"
                        },            
                        "dataRows" : [
                            {   "border" : "normal",
                                
                                "width" : 3,
                                "type" : "titles",
                                "data" : [
                                    { "value" : "Safety" },
                                    { "value" : "Workplace Performance" },
                                    { "value" : "Attitude" },
                                    { "value" : "Attendance" },
                                    { "value" : "Appearance" }],
                                "instructions" : "Criteria"
                            },
                            {   "border" : "normal",
                                "width" : 3,
                                "type" : "twinput",
                                "inputType" : "number",
                                "id" : "assess_",
                                "Instructions" : "Assessment"
                            },
                            {   "border" : "normal",
                                "width" : 3,
                                "type" : "textfill",
                                "inputType" : "text",
                                "style" : "large",
                                "id" : "comment_",
                                "Instructions" : "Comments"
                            }
                        ],
                        
                        "gridSize" : 50, 
                        "width": 8
                    },
                    {
                        
                        "directive": "grid",
                        "type": "checkbox",
                        "lastChild" : false,
                        "sectionborder" : "horizontal",
                        "id": "trainingPortfolio",
                        "title": "Training Portfolio",
                        "width": 4,
                        "dataRows" : [
                            {   "border" : "none",
                                "width" : 12,
                                "type" : "checkbox",
                                "data" : [
                                    { "value" : "Issued" },
                                    { "value" : "Checked" },
                                    { "value" : "Feedback to Host" },
                                    { "value" : "Rotation Required" }
                                ],
                                "instructions" : "Training"
                            }
                        ]
                    },
                    {
                        
                        "directive": "grid",
                        "type": "gridValues",
                        "sectionborder" : "horizontal",
                        "id": "empClientKeyValue",
                        "title": "TAFE Training",
                        "dataRows" : [
                            {   "border" : "none",
                                "width" : 12,
                                "type" : "checkbox",
                                "data" : [
                                    { "value" : "Next TAFE Dates" },
                                    { "value" : "Catch up Required" },
                                    { "value" : "Hold / Re Enrolls" }
                                   
                                ],
                                "instructions" : "Training"
                            }
                        ],
                        "width": 4
                    },
                    {
                        
                        "directive": "grid",
                        "type": "gridValues",
                        "sectionborder" : "horizontal",
                        "lastChild" : true,
                        "id": "empClientKeyValue",
                        "title": "On the Job Training",
                        "dataRows" : [
                            {   "border" : "none",
                                "width" : 12,
                                "type" : "checkbox",
                                "data" : [
                                    { "value" : "Machinery Training" },
                                    { "value" : "New Procedures" },
                                    { "value" : "Safety Training" },
                                    { "value" : "Instructions Declaration Updated" }
                                ],
                                "instructions" : "Training"
                            }
                        ],
                        "width": 4
                    }
                ]
            },
            {
                
                "border" : "innerTitle",
                "connection": "connected",
                "rows": [
                    {
                        "directive": "row",
                        "type": "commentarea",
                        "border": "normal",
                        "title": "Apprentice Comments",
                        "titleClass" : "large centre",
                        "id": "appComments",
                        "width": 12
                    },
                    {
                        
                        "directive": "row",
                        "type": "commentarea",
                        "border": "normal",
                        "title": "Visual Site Safety Inspection",
                        "titleClass" : "large centre",
                        "id": "siteSafety",
                        
                        "width": 12
                    },
                    {
                        "directive": "row",
                        "type": "commentarea",
                        "border": "normal",
                        "title": "PPE",
                        "titleClass" : "large centre",
                        "id": "ppeComments",
                        "width": 12
                    },
                    {
                        
                        "directive": "row",
                        "type": "commentarea",
                        "border": "normal",
                        "title": "Host Comments",
                        "titleClass" : "large centre",
                        "id": "hostcomments",
                        
                        "width": 12
                    },
                    {
                        "directive": "row",
                        "type": "commentarea",
                        "title": "Change of Details Apprentice/Host",
                        "titleClass" : "large centre",
                        "border": "normal",
                        "id": "changecomments",
                        "width": 12
                    },
                    {
                        
                        "directive": "row",
                        "type": "commentarea",
                        "title": "Field Officer Comments",
                        "titleClass" : "large centre",
                        "border": "normal",
                        "id": "fieldofficercomments",
                        "lastChild" : true,
                        "width": 12
                    }
                ]
            },
            {
                
                "border" : "innerTitle",
                "connection": "connected",
                "rows": [
                    {
                        "directive": "row",
                        "type": "text",
                        "border": "normal",
                        "title": "Apprentice / Trainee Field Visit Form",
                        "titleClass" : "small",
                        "id": "formTitle",
                        "width": 6
                    },
                    {
                        
                        "directive": "row",
                        "type": "text",
                        "border": "normal",
                        "title": "Date updated : Mon 06 Feb 2012",
                        "titleClass" : "small",
                        "id": "formDate",
                        "width": 6
                    }
                ]
            }
        ]
    }
]';

?>
