const inquirer = require("inquirer");

module.exports = {
  askAllEmp: async function() {
    // ask the user for the Github username and color
    await inquirer
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
        // get name, id, email and title from response
        console.log("In inquiry...AskAllEmp");
        console.log("promptResponses:");
        console.log(promptResponses);
        console.log(" ");
        return promptResponses;
        //   name = promptResponses.name;
        //   id = promptResponses.id;
        //   email = promptResponses.email;
        //   title = promptResponses.title;

        //   console.log("name: " + name);
        //   console.log("id:  " + id);
        //   console.log("email:  " + email);
        //   console.log("title:  " + title);
      }); // end of inquirer then block
  } // end of askAllEmp

  //     askOfficeNumber: function() {

  //         return officeNumber ;
  //     },

  //     askGithub: function() {
  //         return github;
  //     },

  //     askSchool: function() {
  //         return school;
  //     },

  //     askContinue: function() {
  //         return continue;
  //     }
}; // of module exports
