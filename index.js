// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer
.prompt( [
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
        // type: "input",
        name: "installation",
        message: "Dependencies, such as inquirer, can be installed with npm.", 
    },
    {
        // type: "input",
        name: "usage",
        message: "This application can be uses by answering the prompt questions and enjoying the beauty of file creation.",
    },
    {
        type: "checkbox",
        name: "license",
        choices: ["Apache 2.0", "BSD 3", "GPL 3.0", "MIT", "none"],
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
])
.then((response) => {
    const pageContent = generateMarkdown(response);

    fs.writeFile("README.md", pageContent, (err) => err ? console.log(err) : console.log("README.md was created.")
    );
})


// const fileName = `${title}`
// TODO: Create a function to write README file
// function writeToFile(fileName, generateMarkdown) {
    

// }

// // TODO: Create a function to initialize app
// function init() {
// inquirer.prompt(questions)
// .then(answers) = {
//     const pageContent = generateMarkdown(answers);
// }
// fs.writeFile(README.md, generateMarkdown, (err)=>{
//     if(err){
//         console.log(error);
//     }else{
//         console.log("README.md was created.");
//     }
// }) 
// };


// // Function call to initialize app
// init();