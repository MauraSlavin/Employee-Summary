// inquirer is used to prompt the user for employee information
const inquirer = require("inquirer");
// open to open the html file when done
const open = require("open");

// pull in object constructors
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Ask = require("./lib/Ask");

// pull in writeHtml code
const writeHtml = require("./lib/writeHtml");

// test data
let employees = [
//     {
//     name: "Maura",
//     id: 0,
//     email: "this@email",
//     title: "Manager",
//     officeNumber: 222
// },
//     {
//     name: "Danielle",
//     id: 1,
//     email: "that@email",
//     title: "Engineer",
//     github: "D Slavin"
// },
//     {
//     name: "Mike",
//     id: 2,
//     email: "another@email",
//     title: "Engineer",
//     github: "M Slavin"
// },
//     {
//     name: "Camden",
//     id: 3,
//     email: "unh@email",
//     title: "Intern",
//     school: "UNH"
// }
];

Ask.ask();

writeHtml.write(employees);

open("./output/output.html");