class Developer {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }
}

class EmployeeFactory {
  constructor() {}

  create(name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  }
}

function say() {
  console.log("Hi, I am " + this.name + " and I am a " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("John", 2));
employees.push(employeeFactory.create("Sara", 2));
employees.push(employeeFactory.create("Lara", 1));

employees.forEach((emp) => say.call(emp));
