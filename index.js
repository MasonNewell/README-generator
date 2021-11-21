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
          name: "Apache",
          value:
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        },
        {
          name: "Boost",
          value:
            "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        },
        {
          name: "GNU",
          value:
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        },
        {
          name: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)",
        },
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
1) [License](##-license)

2) [Installation Instructions](##-installation-instructions)

3) [Usage Information](##-usage-information)

4) [Contribution Guidelines](##-contribution-guidelines)

5) [Test Instructions](##-test-instructions)

6) [Questions](###-questions)

## License: 
${data.license}
## Installation Instructions 
${data.installation}
## Usage Information:
${data.usage_information}
## Contribution Guidelines:
${data.contribution_guidelines}
## Test Instructions:
${data.test_instructions}
### Questions: 
Github: https://github.com/${data.git_username}\n
Email: ${data.email}
#### Demo
![demo](/image/demo.gif)`;

    // write to file
    fs.writeFile("README.md", readMeSetup, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
