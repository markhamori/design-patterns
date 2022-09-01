// Expression.js
class Expression {
  constructor() {}

  interpret(context) {}
}

// TerminalExpression.js
class TerminalExpression {
  constructor(data) {
    this.data = data;
  }

  interpret(context) {
    if(context.includes(this.data)) {
      return true
    }
    return false
  }
}

// OrExpression.js
class OrExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1
    this.expr2 = expr2
  }

  interpret(context) {
    return this.expr1.interpret(context) || this.expr2.interpret(context)
  }
}

// AndExpression.js
class AndExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1
    this.expr2 = expr2
  }

  interpret(context) {
    return this.expr1.interpret(context) && this.expr2.interpret(context)
  }
}

// InterpretPatternDemo.js
class InterpretPatternDemo {
  constructor(){}

  getMaleExpression() {
    const robert = new TerminalExpression("Robert")
    const john = new TerminalExpression("John")
    return new OrExpression(robert, john)
  }

  getMarriedWomanExpression() {
    const julie = new TerminalExpression("Julie")
    const married = new TerminalExpression("Married")
    return new AndExpression(julie, married)
  }

  main(args) {
    const isMale = this.getMaleExpression();
    const isMarriedWoman = this.getMarriedWomanExpression();

    console.log("John is male? " + isMale.interpret("John"))
    console.log("Julie is a married woman? " + isMarriedWoman.interpret("Married Julie"))
  }
}

const demo = new InterpretPatternDemo();
demo.main()