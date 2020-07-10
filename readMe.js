const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([{
            type: "input",
            message: "Create project title?",
            name: "title"
        },
        {
            type: "input",
            message: "what is the description?",
            name: "description"
        },
        {
            type: "input",
            message: "What did you install?",
            name: "install"
        }, {
            type: "input",
            message: "Usage?",
            name: "Usage"
        }, {
            type: "input",
            message: "What type of license?",
            name: "license"
        }, {
            type: "input",
            message: "who contribute?",
            name: "contributing"
        }, {
            type: "input",
            message: "what tests?",
            name: "test"
        }, {
            type: "input",
            message: "Questions",
            name: "Questions"
        },
    ]).then(function(data) {
        console.log(data);
        var generate = `
  ## Project title: ${Response.title}
  
  ## Description: ${Response.description}
  
  ### Table of Contents: 

  ## Installation: ${Response.install}

  ## Usage: ${Response.Usage}

  ## License: ${Response.license}

  ## Contributing: ${Response.Contributing}

  ## Tests: ${Response.test}
 
  ## Questions: $(Response.Questions)
  * User Github Profile email
  * User Github email
  `;
    })
fs.writeFile("readMe.md", generate, data, function(err) {
            console.log("do i work)
            })