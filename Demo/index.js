// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project.",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "List a table of contents for your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What command do I run to install your application?",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What are your testing instructions?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Any contribution guidelines?",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should your project have?",
    choices: [
      "MIT",
      "GNU General Public License (GPL)",
      "Common Development and Distribution License",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFileSync(path.join(process.cwd(), "README.md"), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateMarkdown({ ...answers })));
}

// Function call to initialize app
init();
