const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.title = "Engineer";
    };

    getRole() {
        return this.title;
    };

    getGithub() {
        return this.github;
    };
};


// let it be used elsewhere
module.exports = Engineer;