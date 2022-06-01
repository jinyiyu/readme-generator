// 问有没有 license 有的话放一个 badge 在 title -
// img.shields.io :create a badge
// endpoint require url and style or labal and massage
// lable mit license

const inquirer = require("inquirer");

const init = () => {
  const questionArray = [
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
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      name: "GithubUserName",
      type: "input",
      message: "What is your github username?",
    },
    {
      name: "email",
      type: "input",
      message: "What is your email?",
    },

    //   questions that needs to confirm first and ask following question
    // installation question
    {
      name: "confirmInstallation",
      type: "confirm",
      message:
        "Would you like to give a installation guildances for your project.",
    },
    {
      name: "installation",
      type: "input",
      message: "Please give a installation guildances for your project.",
    },
    // contributing question
    {
      name: "ConfirmContributing",
      type: "confirm",
      message:
        "would you like to add a contributing guilance for others who wants to contributing to your project??",
    },
    {
      name: "contributing",
      type: "input",
      message: "please add a contributing guilance for your project?",
    },
    // test question
    {
      name: "confirmTests",
      type: "confirm",
      message:
        "Would you like to give a installation guildances for your project.",
    },
    {
      name: "tests",
      type: "input",
      message: "Please give a installation guildances for your project.",
    },
  ];
  console.log(questionArray);
};

init();
