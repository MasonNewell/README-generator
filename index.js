const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      name: "title",
      message: "What is the name of the project?",
      default: "default_title",
    },
    {
      name: "description",
      message: "Enter a description for the project",
      default: "default_description",
    },
    {
      name: "table_of_contents",
      message: "Enter table of contents:  ",
      default: "table_of_contents:",
    },
    {
      name: "installation",
      message: "Enter installation requirements",
      default: "installation_requirements:",
    },
    {
      name: "usage_information",
      message: "Enter usage information",
      default: "usage_information",
    },
    {
      name: "contribution_guidelines",
      message: "Enter contribution guidelines",
      default: "contributing_guidelines",
    },
    {
      name: "test_instructions",
      message: "Enter test instructions",
      default: "test_instructions",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license: ",
      choices: [
        {
          name: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        "GPL",
        "Apache",
        "GNU",
        "N/A",
      ],
    },
    {
      name: "git_username",
      message: "Enter GitHub username: ",
    },
    {
      name: "email",
      message: "Enter email: ",
    },
  ])
  .then((data) => {
    //  README setup
    const readMeSetup = `# ${data.title}
## Description: 
${data.description}
## Table of Contents:
${data.table_of_contents}
## Installation 
${data.installation}
## Usage Information:
${data.usage_information}
## Contribution Guidelines:
${data.contribution_guidelines}
## test_instructions:
${data.test_instructions}
### License: 
${data.license}
# git_username: ${data.git_username}`;

    // write to file
    fs.writeFile("README.md", readMeSetup, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
