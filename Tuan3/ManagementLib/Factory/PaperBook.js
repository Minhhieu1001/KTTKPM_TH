const Book = require("./Book");

class PaperBook extends Book {
    type() {
        return "Paper Book";
    }
}
module.exports = PaperBook;