const Book = require("./Book");

class AudioBook extends Book {
    type() {
        return "Audio Book";
    }
}
module.exports = AudioBook;