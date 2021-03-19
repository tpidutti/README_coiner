// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const connectMarkdownFl = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
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
        message: "This is a demo file so does not need to be installed.",
    },
    {
        type: "input",
        name: "usage",
        message: "This application can be uses by answering the prompt questions and enjoying the beauty of file creation.",
    },
    {
        type: "checkbox",
        name: "license",
        choices: ["Apace 2.0", "BSD", "GPL", "MIT", "none"],
    },
    {
        type: "input",
        name: "contribution",
        choices: "This project was created by the author and is a demo project.",
    },
    {
        type: "input",
        name: "tests",
        choices: "This is a demo project so there are no tests yet.",
    },
]

// .then({
//     title,
//     description,
//     intallation,
//     usage,
//     license,
//     contribution,
//     tests
// });


const fileName = title
// TODO: Create a function to write README file
function writeToFile(fileName, generateMarkdown) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log(error);
        }else{
            console.log("README.md was created.");
        }
    }) 

}


// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions);
}

// Function call to initialize app
init();

