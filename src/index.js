const inquirer = require("inquirer");

// 问有没有 license 有的话放一个 badge 在 title -
// img.shields.io :create a badge
// endpoint require url and style or labal and massage
// lable mit license

const init = () => {
  const questionArray = [
    {
      name: "projectTitle",
      type: "input",
      message: "What is the title of your project?",
    },
    {
      name: "description",
      type: "input",
      message: "Please give a short description of your project?",
    },
    {
      name: "installation",
      type: "input",
      message: "Please give a installation guildances for your project.",
    },
    {
      name: "usage",
      type: "input",
      message: "Please give a usage information for your project.",
    },
    {
      name: "license",
      type: "list",
      message: "Which license would you like to choose for your project?",
    },
    {
      name: "contributing",
      type: "list",
      message: "Which license would you like to choose for your project?",
    },
    {
      name: "tests",
      type: "confirm",
      message: "Which license would you like to choose for your project?",
    },
    {
      name: "GithubUserName",
      type: "input",
      message: "What is your github username?",
    },
  ];
  console.log(questionArray);
};

init();
