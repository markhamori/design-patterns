// This pattern sends data to an object and if that object
// can't use it, it sends it to any number of other objects
// that may be able to use it

// Client - Initiates the request to a chain of handler objects
// Handler  - defines an interface  for handling the requests
//          - implements the successor link (returning "this")

// Client -> Handler 1 -> Handler 2 -> Handler 3

var Request = function (amount) {
  this.amount = amount;
  console.log(`Requested: $${amount} \n`);
};

Request.prototype = {
  get: function (bill) {
    var count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log(`Dispense ${count} $${bill} bills`);
    return this;
  },
};

function run() {
  var request = new Request(378);

  request.get(100).get(50).get(20).get(10).get(5).get(1);
}

run();
