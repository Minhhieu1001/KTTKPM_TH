const FileSystemItem = require("./FileSystemItem");

class Directory extends FileSystemItem {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(item) {
        this.children.push(item);
    }

    remove(item) {
        this.children = this.children.filter(child => child !== item);
    }

    display(indent = 0) {
        console.log(`${" ".repeat(indent)}+ Directory: ${this.name}`);

        this.children.forEach(child => {
            child.display(indent + 2);
        });
    }
}

module.exports = Directory;