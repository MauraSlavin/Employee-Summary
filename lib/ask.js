// inquirer is used to prompt the user for the Github username and favorite color
const inquirer = require("inquirer");

const ask = () => {
// ask the user for the Github username and color
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee?"
    },
    {
      type: "number",
      name: "id",
      message: "Please assign an employee id number (enter a number)."
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?"
    },
    {
      type: "list",
      name: "title",
      message: "What is the employee's role?",
      choices: ["Manager", "Engineer", "Intern"]
    }
  ]) // end of inquirer prompt

  .then(promptResponses => {
    return promptResponses;
  }); // end of inquirer then block
};


module.exports = {
    ask: ask   // key is first: function ask is the value
}