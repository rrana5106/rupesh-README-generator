const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license do you want for your project?",
    choices: ["MIT", "APACHE 2.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "description",
    message: "Write the description of your project: ",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  console.log("fileName:", fileName);
  console.log("data:", data);
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  console.log("hello");
  inquirer.prompt(questions).then((userAns) => {
    writeToFile("SampleREADME.md", generateMarkdown(userAns));
  });
}

// function call to initialize program
init();
