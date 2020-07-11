const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")

let questions = [{
    type: "input",
    message: "Create project title?",
    name: "title"
}, {
    type: "input",
    message: "what is the description?",
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
}]

function userInputs() {
    inquirer.prompt(questions)
        .then((work) => {
            console.log(work);
            var generate = `
   
  ## Table Of Contents:* [Description](#description)
  * [Installation](#installation)
            
  ### Project title: ${work.title}
  
  ## Description: ${work.description}
  
  ## Installation: ${work.install}
  
  ## Usage: ${work.Usage}
  
  ## License: ${work.license}
  
  ## Contributing: ${work.contributing}
  
  ## Tests: ${work.test}
 
  ## Questions: ${work.Questions}
 
 ![Powered By]https://img.shields.io/badge/NEWB-ITWORKED-brightgreen)
        `
            fs.writeFileSync("newReadme.md", generate, function() {
                console.log("YOU BETTER WORK")
            })
        })
}

// inquirer
//     .prompt({
//         message: "Enter your GitHub username:",
//         name: "username"
//     })
//     .then(function({ username }) {
//         const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//         axios.get(queryUrl).then(function(res) {
//             const repoNames = res.data.map(function(repo) {
//                 return repo.name;
//             });

//             const repoNamesStr = repoNames.join("\n");

//             fs.writeFile("repos.txt", repoNamesStr, function(err) {
//                 if (err) {
//                     throw err;
//                 }

//                 console.log(`Saved ${repoNames.length} repos`);
//             });
//         });
//     });
userInputs();