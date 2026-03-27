const PaperBook = require("./PaperBook");
const EBook = require("./EBook");
const AudioBook = require("./AudioBook");

class BookFactory {
    static create(type, title, author, genre) {
        switch (type) {
            case "paper": return new PaperBook(title, author, genre);
            case "ebook": return new EBook(title, author, genre);
            case "audio": return new AudioBook(title, author, genre);
            default: throw new Error("Invalid type");
        }
    }
}

module.exports = BookFactory;