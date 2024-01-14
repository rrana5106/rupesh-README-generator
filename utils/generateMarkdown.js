function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ## Badges
   
   ${renderLicenseBadge(data.license)}

   ## Description

   ${data.description}
     
   ## Table of Contents (Optional)
      
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   - [Features](#features)
   - [Contribute](#contribute)
   - [Tests](#tests)
   - [Questions](#questions)
   
   ## Installation

    ${data.installation}
   
  ## Usage

   ${data.usage}
   
   ## Credits   
   
   ${data.credits}
   
   ## License
   
   ${renderLicenseBadge(data.license)}

   ## Features
   
   ${data.features}
   
   ## Contribute

   ${data.contributions}
   
   ## Tests
   
  ${data.test}

   ## Questions

   If you have any question, feel free to reach out to me via [GitHub](https://github.com/${
     data.username
   }) or email me at ${data.email}
   `;
}

// it export the generateMarkdown function
module.exports = generateMarkdown;
