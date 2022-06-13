// Allows to add or provide new operations and methods to an
// object without actually changing the object itself
// the new functionality and logic is kept in a seperate object
// known as the visitor object

// Visitor objects are useful when it comes to extending some
// library or framework

// The object to extend also known as the receiving object
// It has a kind of accept method
// It takes in a visitor object and provides the visitor
// object access to the different information and properties
// for that object

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (sal) {
    this.salary = sal;
  },
  accept: function (visitorfunction) {
    visitorfunction(this);
  },
};

const mark = new Employee("Mark", 10000);
console.log(mark.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

mark.accept(ExtraSalary);
console.log(mark.getSalary());
