const SearchStrategy = require("./SearchStrategy");

class SearchByAuthor extends SearchStrategy {
    search(books, keyword) {
        return books.filter(b => b.author.includes(keyword));
    }
}

module.exports = SearchByAuthor;