const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    };

    getRole() {
        return this.title;
    };

    getSchool() {
        return this.school;
    };
};


// let it be used elsewhere
module.exports = Intern;