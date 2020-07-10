const inquirer = require("inquirer");
const fs = require("fs");

const questions = [{
        type: "input",
        message: "create github name",
        name: "Name"
    },
    {
        type: "list",
        message: "",
        name: "badge",
        choices: []
    },
];
getUserInput(() => {
            inquirer.prompt(questions)
                .then(functon(response) {
                        console.log(response);
                        var text =