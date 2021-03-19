// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer
.prompt( [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe this project and its purpose?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this application?", 
    },
    {
        type: "input",
        name: "usage",
        message: "What instructions for use would you like to include?",
    },
    {
        type: "checkbox",
        name: "license",
        choices: ["Apache 2.0", "BSD 3", "GPL 3.0", "MIT", "none"],
    },
    {
        type: "input",
        name: "contribution",
        choices: "How can you contribute to this application?",
    },
    {
        type: "input",
        name: "tests",
        choices: "What tests should be run on this application?",
    },
])
.then((response) => {
    const pageContent = generateMarkdown(response);

    fs.writeFile("README.md", pageContent, (err) => err ? console.log(err) : console.log("README.md was created.")
    );
})

