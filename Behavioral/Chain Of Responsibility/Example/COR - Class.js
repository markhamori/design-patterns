class Request {
  constructor(amount) {
    this.amount = amount;
  }

  log() {
    console.log(`Requested: $${this.amount} \n`);
    return this
  }

  get(bill) {
    var count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log(`Dispense ${count} $${bill} bills`);
    return this;
  }
}

var request = new Request(378);

request.log().get(100).get(50).get(20).get(10).get(5).get(1);
