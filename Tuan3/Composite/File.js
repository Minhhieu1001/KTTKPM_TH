const FileSystemItem = require("./FileSystemItem");

class File extends FileSystemItem {
    constructor(name, content) {
        super(name);
        this.content = content;
    }

    display(indent = 0) {
        console.log(`${" ".repeat(indent)}- File: ${this.name}`);
    }
}

module.exports = File;