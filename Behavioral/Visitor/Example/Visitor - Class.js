class Employee {
  constructor(name, salary) {
    this.name = name;    
    this.salary = salary;    
  }

  getSalary() {
    return this.salary;
  }

  setSalary(sal) {
    this.salary = sal;
  }

  accept(visitorfunction) {
    visitorfunction(this);
  }
}

const mark = new Employee("Mark", 10000);
console.log(mark.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

mark.accept(ExtraSalary);
console.log(mark.getSalary());