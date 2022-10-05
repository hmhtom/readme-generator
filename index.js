const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Title: ",
    },
    {
      type: "editor",
      name: "description",
      message: "Description: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Install Instructions: ",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage Information: ",
    },
    {
      type: "input",
      name: "contributing",
      message: "Contribution Guidelines: ",
    },
    {
      type: "input",
      name: "tests",
      message: "Test Instructions: ",
    },
    {
      type: "list",
      name: "license",
      message: "Licenses: ",
      choices: [
        "Apache License 2.0",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "Eclipse Public License 1.0",
        "GNU GPL v3",
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "Mozilla Public License 2.0",
        "MIT License",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Github Username: ",
    },
    {
      type: "input",
      name: "email",
      message: "Email: ",
    },
  ])
  .then((answer) => {
        licenseLink = "https://opensource.org/licenses/ISC";
        break;
      case "Mozilla Public License 2.0":
        badge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
        licenseLink = "https://opensource.org/licenses/MPL-2.0";
        break;
      case "MIT License":
        badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
        licenseLink = "https://opensource.org/licenses/MIT";
        break;
    }

    let content = `# ${answer.title} \n![${answer.license}](${badge})\n\n`;
    content += `- [Description](#description)\n\n- [Installation](#installation)\n\n- [Usage](#usage)\n\n- [Contributing](#contributing)\n\n- [Tests](#tests)\n\n- [License](#License)\n\n- [Questions](#questions)\n\n`;
    content += `## Description\n ${answer.description}\n\n`;
    content += `## Installation\n ${answer.installation}\n\n`;
    content += `## Usage\n ${answer.usage}\n\n`;
    content += `## Contributing\n ${answer.contributing}\n\n`;
    content += `## Tests\n ${answer.tests}\n\n`;
    content += `## License\n [${answer.license}](${licenseLink})\n\n`;
    content += `## Questions\n [Contact Us Through Github](https://github.com/${answer.github})\n\n[Contact Us Through Email](mailto:${answer.email})\n\n`;

    console.log(content);

    fs.writeFile(`RFEADME.md`, content, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
