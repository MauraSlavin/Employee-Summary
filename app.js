// inquirer is used to prompt the user for employee information
const inquirer = require("inquirer");
const Employee = require("./Develop/classes/employee");
const Manager = require("./Develop/classes/manager");



let newEmployee = new Employee("Maura", 0, "Maura@gmail", "big boss");
console.log(newEmployee);
