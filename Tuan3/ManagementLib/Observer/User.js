const Observer = require("./Observer");

class User extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    update(msg) {
        console.log(`User ${this.name}: ${msg}`);
    }
}

module.exports = User;