const Observer = require("./Observer");

class Investor extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    update(data) {
        console.log(`Investor ${this.name} notified: ${data.name} = ${data.price}`);
    }
}

module.exports = Investor;