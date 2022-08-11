class User {
  constructor(name) {
    this.name = name
  }

  say() {
    console.log("User: " + this.name)
  }
}

class DecoratedUser {
  constructor(user, name, street, city) {
    this.user = user;
    this.name = name;
    this.street = street;
    this.city = city;
  }

  say() {
    console.log("Decorated User: " + this.name + ", " + this.street + ", " + this.city)
  }
}

function run() {
  let user = new User("Mark")
  user.say()

  let decorated = new DecoratedUser(user, "Andrássy", "Budapest")
  decorated.say();
}

run();