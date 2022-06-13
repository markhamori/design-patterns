// Define a one-to-many dependency relationship
// from one object known as the subject to many
// other objects known as the observers

// These observers are functions which watch the subject
// and wait for some signal or trigger from the subject
// before they run (like an event listener)
// It useful and commonly used when it comes to creating
// event handling systems

function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) return fn;
    });
  },
  trigger: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("Observer 1 Triggered!");
}

function Observer2() {
  console.log("Observer 2 Triggered!");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer1);
subject.trigger();
