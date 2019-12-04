// inquirer is used to prompt the user for employee information
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


let newEmployee = new Employee("Maura", 0, "Maura@gmail", "big boss");
console.log(newEmployee);
