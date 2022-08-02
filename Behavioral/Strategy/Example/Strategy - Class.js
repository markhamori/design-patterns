class Fedex {
  constructor() {}

 calculate (pack) {
    return 2.45;
  };
}

class UPS {
  constructor() {}
 calculate (pack) {
    return 1.56;
  };
}

class USPS {
  constructor() {}
 calculate (pack) {
    return 4.5;
  };
}

// Encapsulate the functions above, because these have the same behavior (calculate method)

class Shipping {
  constructor() {
    this.company = "";
  };

  setStrategy (company) {
    this.company = company;
  };

  calculate (pack) {
    return this.company.calculate(pack);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const pack = { from: "Alabama", to: "Georgia", weight: 1.56 };

const shipping = new Shipping();
shipping.setStrategy(ups);
console.log("Ups: " + shipping.calculate(pack));
