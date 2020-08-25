const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
// const { inherits } = require("util");

// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);
// function promptUser(){

// return
inquirer.prompt([
    // this is where we will put the prompts for the questions we need to ask to build out the array
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "email"
        },
        {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
        },
        {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description"
        },
        {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
        },
        {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "installation"
        },
        {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "test"
        },
        {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
        },
        {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
        },
        ])
      
.then(data => {
    console.log(data);

    let readMe = generateMarkdown(data);

    fs.writeFile("README.md", readMe,  err => {
        if (err){
            return console.log(err);
            }
            console.log("Success!")
            // tryingt to push the answers to the open string of let readMe
            
    //     readMe.push(answers.title);
    // readMe.push(data.description);
    });
    
});

function init(){

}

init();