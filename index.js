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
      type: "editor",
      name: "installation",
      message: "Install Instructions: ",
    },
    {
      type: "editor",
      name: "usage",
      message: "Usage Information: ",
    },
    {
      type: "editor",
      name: "contributing",
      message: "Contribution Guidelines: ",
    },
    {
      type: "editor",
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
    fs.writeFile(`SampleREADME.md`, renderReadme(answer), (err) =>
      err
        ? console.error(err)
        : console.log(`Readme for ${answer.title} successfully created.`)
    );
  });

function renderBadge(license) {
  let badge;
  let licenseLink;
  switch (license) {
    case "Apache License 2.0":
      badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost Software License 1.0":
      badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD 3-Clause License":
      badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Eclipse Public License 1.0":
      badge = "https://img.shields.io/badge/License-EPL_1.0-red.svg";
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU GPL v3":
      badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "IBM Public License Version 1.0":
      badge = "https://img.shields.io/badge/License-IPL_1.0-blue.svg";
      licenseLink = "https://opensource.org/licenses/IPL-1.0";
      break;
    case "ISC License (ISC)":
      badge = "https://img.shields.io/badge/License-ISC-blue.svg";
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
  return [badge, licenseLink];
}

function renderReadme(answer) {
  const [badge, licenseLink] = renderBadge(answer.license);

  let content = `# ${answer.title} \n![${answer.license}](${badge})\n\n`;
  content += `- [Description](#description)\n\n- [Installation](#installation)\n\n- [Usage](#usage)\n\n- [Contributing](#contributing)\n\n- [Tests](#tests)\n\n- [License](#license)\n\n- [Questions](#questions)\n\n`;
  content += `## Description\n ${answer.description}\n\n`;
  content += `## Installation\n ${answer.installation}\n\n`;
  content += `## Usage\n ${answer.usage}\n\n`;
  content += `## Contributing\n ${answer.contributing}\n\n`;
  content += `## Tests\n ${answer.tests}\n\n`;
  content += `## License\n [${answer.license}](${licenseLink})\n\n`;
  content += `## Questions\n [Contact Us Through Github](https://github.com/${answer.github})\n\n[Contact Us Through Email](mailto:${answer.email})\n\n`;

  return content;
}
