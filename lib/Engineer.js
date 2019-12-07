// extends the employee class
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // get the employee properties
        super(name, id, email);
        // add the engineer properties
        this.github = github;
        this.title = "Engineer";
    };

    //returns the role (or title) of the employee
    getRole() {
        return this.title;
    };

    // returns the Github username of the employee
    getGithub() {
        return this.github;
    };
};


// let it be used elsewhere
module.exports = Engineer;