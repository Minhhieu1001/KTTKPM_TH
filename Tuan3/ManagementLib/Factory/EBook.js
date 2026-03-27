const Book = require("./Book");

class EBook extends Book {
    type() {
        return "EBook";
    }
}
module.exports = EBook;