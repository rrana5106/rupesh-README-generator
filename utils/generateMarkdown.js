function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![badmath](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# Title
   ${data.title}

   ## Badges
   
   ${renderLicenseBadge(data.license)}

   ## Description
     
   ## Table of Contents (Optional)
      
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   
   ## Installation
      
   ## Usage
   
   ![alt text](assets/images/screenshot.png)
      
   ## Credits   
     
   ## License
      
   ## Features
   
   If your project has a lot of features, list them here.
   
   ## How to Contribute
   
   ## Tests

   ## Questions
   `;
}

module.exports = generateMarkdown;
