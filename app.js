// inquirer is used to prompt the user for employee information
const inquirer = require("inquirer");

function Employee() {
  //  this.name = "",
  //this.id = id,
  //   this.title = title,
  // this.email = email,

  let name = "";
  let id = 0;
  let email = "default@email.com";
  let role = "worker";

  this.getName = function() {
    console.log("Ask for the Name");
    name = "Test name";
    // name = name;
  };

  this.getId = function() {
    console.log("Ask for the ID");
    id = 0;
    // id = id;
  };

  this.getEmail = function() {
    console.log("Ask for email");
    email = "email@email.com";
    // email = email;
  };

  this.getRole = function() {
    console.log("Ask for role");
    role = "worker";
    // role = role;
  };

  this.name = name;
  this.id = id;
  this.email = email;
  this.title = role;
}

let newEmployee = new Employee();
console.log(newEmployee);
