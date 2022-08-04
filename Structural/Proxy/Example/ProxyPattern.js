

// External API service
function CryptoCurrencyAPI() {
  this.getValue = function (coin) {
    console.log("Calling External API...");
    switch (coin) {
      case "Bitcoin":
        return "$8,500";
      case "Litecoin":
        return "$50";
      case "Ethereum":
        return "$175";
    }
  };
}

// const api = new CryptoCurrencyAPI();

// console.log(api.getValue("Bitcoin"));
// console.log(api.getValue("Litecoin"));
// console.log(api.getValue("Ethereum"));

// Instead we call the external API
// we call our proxy (it will store the values in the cache)
// if proxy does not have the value, it calls the external api

function CryptoCurrencyProxy() {
  this.api = new CryptoCurrencyAPI();
  this.cache = {};

  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }

    return this.cache[coin];
  };
}

const proxy = new CryptoCurrencyProxy();

console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
