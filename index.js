const inquirer = require("inquirer");
const fs = require("fs");

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
        type: "list",
        message: "What command should be run to install dependencies?",
        choices: ["npm i"],
        name: "installation"
        },
            {
                type: "list",
                message: "What command should be run to run tests?",
                choices: ["npm test"],
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
      
.then(answers => {
    console.log(answers);

    let readMe = "";

    fs.writeFile("README.md", readMe,  err => {
        if (err){
            return console.log(err);
    readMe.push(answers.title);
    readMe.push(data.description);
        }
        
    });
    
});

