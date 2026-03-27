const Library = require("./singleton/Library");
const BookFactory = require("./factory/BookFactory");

const User = require("./observer/User");
const Librarian = require("./observer/Librarian");

const SearchByName = require("./strategy/SearchByName");

const Borrow = require("./decorator/Borrow");
const ExtendTime = require("./decorator/ExtendTime");
const SpecialEdition = require("./decorator/SpecialEdition");

// Observer
const user = new User("Alice");
const librarian = new Librarian();

Library.subscribe(user);
Library.subscribe(librarian);

// Factory
const book1 = BookFactory.create("paper", "NodeJS", "John", "Tech");
const book2 = BookFactory.create("ebook", "Design Pattern", "GoF", "Tech");

Library.addBook(book1);
Library.addBook(book2);

// Strategy
const search = new SearchByName();
console.log("\nSearch result:", search.search(Library.getBooks(), "Node"));

// Decorator
let borrow = new Borrow();
borrow = new ExtendTime(borrow);
borrow = new SpecialEdition(borrow);

console.log("\nBorrow:", borrow.getDetails());