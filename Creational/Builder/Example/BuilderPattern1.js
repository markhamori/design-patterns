// SECOND EXAMPLE

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

// class User {
//   constructor(name, age, phone, address) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address;
//   }
// }

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

// const user = new User("Bob", undefined, undefined, new Address("1", "Main"));
// console.log(user);
// We do not need to use undefined, we can build up
// the user with setAge etc. functions.
// Other pro is that we know which property we use to set
// a value itself

let user = new UserBuilder("Bob").setAge(10).setPhone("111111111").build();
console.log(user);
