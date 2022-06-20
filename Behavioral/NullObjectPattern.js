// Use anytime when we have a null object returned
// Having to check for null every single time
// We can treat the object that's being this null object
// as if it was just a normal object of that same type

// For example image object, or user system

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);

  // let name = "Guest";
  // if (user != null && user.name != null) name = user.name;
  // console.log("Hello " + name);
  console.log("Hello " + user.name);

  // if (user != null && user.hasAccess != null && user.hasAccess()) {
  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUser(1);
