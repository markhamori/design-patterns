function Fedex() {
  this.calculate = (package) => {
    return 2.45;
  };
}

function UPS() {
  this.calculate = (package) => {
    return 1.56;
  };
}

function USPS() {
  this.calculate = (package) => {
    return 4.5;
  };
}

// Encapsulate the functions above, because these have the same behavior (calculate method)

function Shipping() {
  (this.company = ""),
    (this.setStrategy = (company) => {
      this.company = company;
    });
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package = { from: "Alabama", to: "Georgia", weight: 1.56 };

const shipping = new Shipping();
shipping.setStrategy(ups);
console.log("Ups: " + shipping.calculate(package));
