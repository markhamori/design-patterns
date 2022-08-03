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
  .setWeight(70)
  .setHeight(180)
  .build();

console.log(mark);
