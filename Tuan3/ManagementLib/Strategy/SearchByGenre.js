const SearchStrategy = require("./SearchStrategy");

class SearchByGenre extends SearchStrategy {
    search(books, keyword) {
        return books.filter(b => b.genre.includes(keyword));
    }
}

module.exports = SearchByGenre;