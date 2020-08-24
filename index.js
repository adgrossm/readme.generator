var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    // this is where we will put the prompts for the questions we need to ask to build out the array
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHub"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "email"
        },
        {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName"
        },
        {
        type: "input",
        message: "Please write a short description of your project:",
        name: "projectDescrip"
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
        name: "commandInstall"
        },
            {
                type: "list",
                message: "What command should be run to run tests?",
                choices: ["npm test"],
                name: "commandTests"
            },
            {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "repoUsage"
            },
            {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "repoContrib"
            },
    
]).then(answers => {
    console.log(answers);

    let readme = "";

    fs.writeFile("README.md", readme,  err => {
        if (err){
            return console.log(err);

        }
    });
});
// step 1 figure out how markdown works. 