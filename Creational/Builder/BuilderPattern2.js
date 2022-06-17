//  THIRD EXAMPLE (Another fancier way in JavaScript)

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  // Now these props are optional with a default value of
  // empty object. We have key-value pairs, so its easy to
  // give a value to the given key (for example age, phone, etc.)
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User("Bob", { age: 10, address: new Address("1", "Main") });
console.log(user);
