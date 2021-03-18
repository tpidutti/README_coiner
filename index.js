// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const connectMarkdownFl = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
];

inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, ) 

}



// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)

}

// Function call to initialize app
init();

