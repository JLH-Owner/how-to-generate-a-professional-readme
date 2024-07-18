// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./develop/utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
    console.log("Initializing generation of Professional Readme")
}
// Function call to initialize app
init();

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of Project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please describe your application, including what you want to accomplish, why did you build this, what does it solve, and what did you learn:',
            name: 'description',
        },
        {
            type: 'list',
            message: 'Choose the license for your project:',
            name: 'license',
            choices: [
                {value: 'ISC'},
                {value: 'MIT'},
                {value: 'None'},
            ]
        },
        {
            type: 'input',
            message: 'Provide a step-by-step description of how to install your application:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide a step-by-step description of how to use your application:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How would you test this application?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'List your collaborators:',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Enter yourGitHub Username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Where is this application deployed?',
            name: 'deploy',
        },
    ])


// TODO: Create a function to write README file
    .then((data) => {
        fs.writeFile(`${data.github}.md`, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
    });




