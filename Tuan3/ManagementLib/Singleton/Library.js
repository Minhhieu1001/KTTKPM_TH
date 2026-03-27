class Library {
    constructor() {
        if (Library.instance) return Library.instance;

        this.books = [];
        this.observers = [];

        Library.instance = this;
    }

    addBook(book) {
        this.books.push(book);
        this.notify(`New book added: ${book.title}`);
    }

    getBooks() {
        return this.books;
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(message) {
        this.observers.forEach(o => o.update(message));
    }
}

module.exports = new Library();