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