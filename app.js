// inquirer is used to prompt the user for employee information
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");



let newEmployee = new Employee("Maura", 0, "Maura@gmail", "big boss");
console.log(newEmployee);
