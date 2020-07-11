const inquirer = require("inquirer");
const fs = require("fs");

let questions = [{
        type: "input",
        message: "Enter your Email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Enter URL Github profile picture ",
        name: "image"
    },
    {
        type: "input",
        message: "Create project title?",
        name: "title"
    }, {
        type: "input",
        message: "Enter description?",
        name: "description"
    }, {
        type: "input",
        message: "What did you install?",
        name: "install"
    }, {
        type: "input",
        message: "Usage?",
        name: "Usage"
    }, {
        type: "list",
        message: "Select license",
        choices: ["YAY", "WOW", "MIT", "UCB"],
        name: "license"
    }, {
        type: "input",
        message: "who contribute?",
        name: "contributing"
    }, {
        type: "input",
        message: "what test?",
        name: "test"
    }, {
        type: "input",
        message: "Questions",
        name: "Questions"
    }
]

function userInputs() {
    inquirer.prompt(questions)
        .then((work) => {
            console.log(work);
            var generate = `
   
  <p>
  <img src="${work.image}"width="250"/></p>
  <hr>
  
  ## Table Of Contents
  |   |       | |
| ------------- |:-------------:| -----:|
| [E-mail](#email)| [Project Title](#Project-title)| [Description](#description)|
| [Installation](#installation)| [Usage](#usage)| [License](#license)|
| [Contribute](#contribute)| [Tests](#tests)| [Questions](#questions)|
  <hr>

  ## Email 
  ${work.email}
  <hr>
      
  ## Project title 
  ${work.title}
  <hr>

  ## Description 
  ${work.description}
  <hr>

  ## Installation 
  ${work.install}
  <hr>

  ## Usage 
  ${work.Usage}
  <hr>

  ## License 
  ${work.license}
  <hr>

  ## Contribute
  ${work.contributing}
  <hr>

  ## Tests 
  ${work.test}
  <hr>

  ## Questions 
  ${work.Questions}
  <hr>

  ![license](https://img.shields.io/badge/license-${work.license}-orange.svg)
        `
            fs.writeFileSync("README.md", generate, function() {
                console.log("YOU BETTER WORK")
            })
        })
}

userInputs();