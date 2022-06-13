// The builder pattern allows us to create complex objects
// piece by piece by creating a new instance of some object
// with some baseline properties
// Then we can add properties to that object one by one

// The goal of the builder pattern is to separate an object's construction
// from its representation

// We do not have to worry about specific syntax or specific order,
// because the builder take away these problems from us

function Person(name, weight, height, gender) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.gender = gender;
}

function PersonBuilder(name, gender) {
  this.name = name;
  this.gender = gender;

  this.setWeight = function (weight) {
    this.weight = weight;
    return this;
  };

  this.setHeight = function (height) {
    this.height = height;
    return this;
  };

  this.build = function () {
    return new Person(this.name, this.weight, this.height, this.gender);
  };
}

// Under this line, its located in another file
// --------------------------------------------

// const patrick = new Person("Patrick", 5, 2.2, "male");

const mark = new PersonBuilder("Mark", "male")
  .setWeight(20)
  .setHeight(100)
  .build();

console.log(mark);
