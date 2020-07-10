const inquirer = require("inquirer");
const fs = require("fs");

const questions = [{
        type: "input",
        message: "create github name",
        name: "Name"
    },
    {
        type: "input"
    } {
        type: "list",
        message: "",
        name: "badge",
        choices: ["GPL", "ISC", "UCB"
            "MIT"
        ]
    },
];
getUserInput(() => {
            inquirer.prompt(questions)
                .then(functon(response) {
                        console.log(response);
                        var text = #Title: $ { response.Title }###
                        Github[![License: CC BY - SA 4.0](https: //img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)