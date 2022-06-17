// The command pattern idea is to take the
// differentt operations that we want something
// to do and encapsulate them into individual
// commands that have a perform and then
// an undo method

// Commands are seperated the actual object

// Command pattern is popular in a text editor

/////////////////////////////// WITHOUT COMMAND PATTERN
// SIMPLE CALCULATOR

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(valueToAdd) {
    this.value = this.value + valueToAdd;
  }

  subtract(valueToSubtract) {
    this.value = this.value - valueToSubtract;
  }

  multiply(valueToMultiply) {
    this.value = this.value * valueToMultiply;
  }

  divide(valueToDivide) {
    this.value = this.value / valueToDivide;
  }
}

const calculator = new Calculator();
// calculator.add(10);
// console.log(calculator.value);
// calculator.divide(2);
// console.log(calculator.value);

/////////////////////////////// WITH COMMAND PATTERN
class Calculator2 {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

// Combine function above is so much easier
class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.addCommand = new AddCommand(valueToAdd);
    this.multiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  execute(currentValue) {
    const newValue = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(newValue);
  }

  undo(currentValue) {
    const newValue = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(newValue);
  }
}

const calculator2 = new Calculator2();
console.log(calculator2.value);
// calculator2.executeCommand(new AddCommand(10));
// console.log(calculator2.value);
// calculator2.executeCommand(new MultiplyCommand(2));
calculator2.executeCommand(new AddThenMultiplyCommand(10, 2));
console.log(calculator2.value);
calculator2.undo();
console.log(calculator2.value);
