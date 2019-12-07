// needed to ask questions (have a conversation) on the CDL with the user
const inquirer = require("inquirer");
// open to open the html file when done
const open = require("open");
// to validate email
const validator = require("email-validator");

// pull in object constructors
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// pull in writeHtml code to write the HTML to a file
const writeHtml = require("./lib/writeHtml");

// the array of employees starts out empty
var employees = [];

// these are the questions that will be asked
const questions = [
  // Name, ID number, email and role(title) is needed for all employees
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee?"
  },
  {
    // putting "number" for type wouldn't let the user backspace over "NaN" if they entered text; or backspace over an invalid number.
    type: "input",
    name: "id",
    message: "Please assign a unique employee id number (enter a number):",
    validate: validateID()
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email address?",
    validate: validateEmail()
  },
  {
    type: "list",
    name: "title",
    message: "What is the employee's role?",
    choices: ["Manager", "Engineer", "Intern"]
  },

  // only ask for office number of the manager
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    when: whichTitle("Manager")
  },

  // only ask for Github username for an engineer
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
    when: whichTitle("Engineer")
  },

  // only ask for the school of an intern
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
    when: whichTitle("Intern")
  },

  // repeat all the questions if the user has more employees to enter
  {
    type: "confirm",
    name: "more",
    message: "Do you have more employees to enter (hit ENTER for Yes)?",
    default: true
  }
];

// returns true if the title passed in matches the role(title) entered.
function whichTitle(title) {
  return function(answers) {
    return answers.title == title;
  };
};

// returns true if the id is a unique id number.
function validateID() {
  return function(answers) {
    let valid = true;
    if (isNaN(answers)) {
      const err = "Please enter a number.";
      console.log(`\n${err}`);
      valid = false;
      return valid;
    };
    employees.forEach(emp => {
      if (emp.id == answers) {
        const err = `The ID number ${emp.id} is has been assigned to ${emp.name}.  \nPlease assign a unique ID number.`;
        console.log(`\n${err}`);
        valid = false;
        return valid;
      };
    });
    return valid;
  };
};

// returns true if the title passed in matches the role(title) entered.
function validateEmail() {
  return function(answers) {
    if (validator.validate(answers)) {
      return true;
    }
    const err = "You entered an invalid email address.";
    console.log(`\n${err}`);
    return err;
  };
};

// asks and processes the questions
function conversation() {
  // uses provided questions to have a conversation to build an employee object
  inquirer.prompt(questions).then(employee => {
    // push the new employee object to the array of employees
    employees.push(employee);
    if (employee.more) {
      // if user has more employees to enter, start the conversation again, recursively
      conversation();
    } else {
      // when done entering employees, write HTML file
      writeHtml.write(employees);
      // and open the html file.
      open("lib/output/output.html");
    }
  });
};

// Starts the app with a conversation asking about each employee
conversation();
