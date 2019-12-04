// inquirer is used to prompt the user for employee information
const inquirer = require("inquirer");
const Employee = require("./Develop/classes/employee");



let newEmployee = new Employee("Maura", 1, "Maura@gmail", "big boss");
console.log(newEmployee);
