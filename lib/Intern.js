// extends the employee class
const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // get employee properties
        super(name, id, email);
        // add intern properties
        this.school = school;
        this.title = "Intern";
    };

    // returns the role of the intern
    getRole() {
        return this.title;
    };

    // returns the school of the intern
    getSchool() {
        return this.school;
    };
};


// let it be used elsewhere
module.exports = Intern;