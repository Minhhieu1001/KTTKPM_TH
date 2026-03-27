const Observer = require("./Observer");

class Librarian extends Observer {
    update(msg) {
        console.log(`Librarian notified: ${msg}`);
    }
}

module.exports = Librarian;