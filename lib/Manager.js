const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
        this.title = "Manager";
    };
};


// let it be used elsewhere
module.exports = Manager;