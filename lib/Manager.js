// manager extends the employee class
const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // get the employee properties
        super(name, id, email);
        // add the properties for the manager
        this.officeNumber = officeNumber;
        this.title = "Manager";
    };

    // returns the role (or title) of the manager
    getRole() {
        return this.title;
    };

    // returns the office number of the manager
    getOfficeNumber() {
        return this.officeNumber;
    };
};


// let it be used elsewhere
module.exports = Manager;