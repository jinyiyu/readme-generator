const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Please give a short description of your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "Please give a usage information for your project.",
  },
  {
    name: "license",
    type: "list",
    message: "Which license would you would like to choose for your project?",
    choices: ["Apache", "AUR", "MIT", "Apache 2", "Compliant", "GPL", "BSD"],
  },
  {
    name: "githubUserName",
    type: "input",
    message: "What is your github username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email?",
  },
  {
    name: "confirmInstallation",
    type: "confirm",
    message:
      "Would you like to give a installation guildances for your project?",
  },
  {
    name: "installation",
    type: "input",
    message: "Please give a installation guildances for your project.",
    when: (answers) => {
      return answers.confirmInstallation;
    },
  },
  {
    name: "confirmContributing",
    type: "confirm",
    message:
      "Would you like to add a contributing guilance for others who wants to contributing to your project??",
  },
  {
    name: "contributing",
    type: "input",
    message: "please add a contributing guilance for your project?",
    when: (answers) => {
      return answers.confirmContributing;
    },
  },
  {
    name: "confirmTests",
    type: "confirm",
    message:
      "Would you like to give a installation guildances for your project.",
  },
  {
    name: "tests",
    type: "input",
    message: "Please give a test guildances for your project.",
    when: (answers) => {
      return answers.confirmTests;
    },
  },
];

const generateReadme = (answers) => {
  return `# ${answers.title} ![alt text](${encodeURI(
    `https://img.shields.io/badge/${answers.license}-License-green`
  )})

## Table of Contents

- [Description](#description)
${answers.confirmInstallation ? `- [Installation](#installation)` : ""}
- [Usage](#usage)
${answers.confirmContributing ? `- [Contributing](#contributing)` : ""}
${answers.confirmTests ? `- [Tests](#tests)` : ""}
- [Question](#questions)

## Description

${answers.description}

${
  answers.confirmInstallation
    ? `## Installation

Please follow the instructions below:

\`\`\`\

${answers.installation}

\`\`\`\ `
    : ""
}

## Usage

Please follow the instructions below:

\`\`\`\

${answers.usage}

\`\`\`\

${
  answers.confirmContributing
    ? `## Contributing

${answers.contributing}`
    : ""
}

${
  answers.confirmTests
    ? `## Tests

Please follow the instructions below:

\`\`\`\

${answers.test}

\`\`\`\ `
    : ""
}

## Questions

Please contact me if you have any inquiries on my email : ${answers.email}

Visit my Github profile [here](https://github.com/${answers.githubUserName})`;
};

const init = async () => {
  const answers = await inquirer.prompt(questions);
  const readme = generateReadme(answers);
  fs.writeFileSync("./GENERATED_README.md", readme);
};

init();
