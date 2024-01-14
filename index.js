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
  {
    type: "input",
    name: "installation",
    message: "Enter installation instruction: ",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
    default: "node index.js",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Enter the credit information that inspired you for your project: ",
  },
  {
    type: "input",
    name: "features",
    message: "Enter the features of your project (seperate-by-comma): ",
  },
  {
    type: "input",
    name: "contributions",
    message: "Write the contribution infromation: ",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions: ",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address: ",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  try {
    // it attempt to write the data to the specified file
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
    // if it succesfull, log a success message
    console.log(`File ${fileName} created successfully!`);
  } catch (error) {
    // If an error occurs during the file-writing operation, catch it
    // Log an error message with details about the specific error
    console.error(`Error writing to file ${fileName}: ${error.message}`);
  }
}

// function to initialize program
function init() {
  // get the filename from the command line arguments
  let userFileName = process.argv[2];

  // it will check the filename does not end with ".md"
  if (!userFileName || !userFileName.endsWith(".md")) {
    // print the error message to the console
    console.error("Invalid, please put filename with .md extention.");
    // exit the function if the filename if invalid
    return;
  }
  // Use inquirer to prompt the user with questions defined in the 'questions' array
  inquirer.prompt(questions).then((userAns) => {
    // Call the 'writeToFile' function with the filename and user answers
    writeToFile(userFileName, generateMarkdown(userAns));
  });
}

// function call to initialize program
init();
