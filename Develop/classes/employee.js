class Employee {
  // create Employee object given the name, id & email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    // default role/title is Employee to start, can change
    this.title = "Employee";
  }

  // returns the name
  getName = function() {
    return this.name;
  };

  // returns the id
  getId = function() {
    return this.id;
  };

  // returns the email
  getEmail = function() {
    return this.email;
  };

  // returns the title/role
  getRole = function() {
    return this.title;
  };
};

// let it be used elsewhere
module.exports = Employee;