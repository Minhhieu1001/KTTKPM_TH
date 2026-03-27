const Subject = require("./Subject");

class Stock extends Subject {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }

    setPrice(newPrice) {
        console.log(`\n[Stock] ${this.name} price changed to ${newPrice}`);
        this.price = newPrice;
        this.notify({ name: this.name, price: this.price });
    }
}

module.exports = Stock;