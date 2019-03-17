<?php
echo '[
    {
        "pageNo": 1,
        "titleParts": [
            {
                "type": "text",
                "title": "Apprentice / Trainee Field Visit Form",
                "width": 7
            },
            {
                "type": "logo",
                "logoURL": "chouse_logo_c.png",
                "width": 4
            }
        ],
        "sections": [
            {
                "title": "Section #1",
                "rows": [
                    {
                        "type": "checkbox",
                        "title": "Visit Type:",
                        "width": 4,
                        "radioTitles": [
                            {
                                "name": "Pastoral"
                            },
                            {
                                "name": "Completion"
                            }
                        ]
                    },
                    {
                        "type": "radio",
                        "title": "Contact By:",
                        "width": 4,
                        "radioTitles": [
                            {
                                "name": "Phone"
                            },
                            {
                                "name": "Visit",
                                "ticked" : true
                            }
                        ]
                    },
                    
                    {
                        "type": "date",
                        "title": "Date:"
                        "input": "datepicker"
                    },
                    {
                        "type": "input",
                        "input": "autocomplete"
                        "title": "Consultant",
                        "id": "EdtConsultant", //Test Notes
                        "width": 12
                    },
                    {
                        "type": "input",
                        "input": "autocomplete"
                        "title": "Apprentice Name",
                        "id": "EdtApprentice",
                        "width": 12
                    }
                ]
            },
            {
                "title": "Section #2",
                "rows": [
                    {
                        "type": "textfieldprefil",
                        "title": "Consultant",
                        "id": "EdtConsultant",
                        "width": 12
                    },
                    {
                        "type": "textfield",
                        "title": "Title of Row #4",
                        "width": 12
                    }
                ]
            }
        ]
    }
]';

?>
