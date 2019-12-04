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
  getName() {
    return this.name;
  };

  // returns the id
  getId() {
    return this.id;
  };

  // returns the email
  getEmail() {
    return this.email;
  };

  // returns the title/role
  getRole() {
    return this.title;
  };
};

// let it be used elsewhere
module.exports = Employee;