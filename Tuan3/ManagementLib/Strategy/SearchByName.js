const SearchStrategy = require("./SearchStrategy");

class SearchByName extends SearchStrategy {
    search(books, keyword) {
        return books.filter(b => b.title.includes(keyword));
    }
}

module.exports = SearchByName;