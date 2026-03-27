class FileSystemItem {
    constructor(name) {
        this.name = name;
    }

    display(indent = 0) {
        throw new Error("Method 'display()' must be implemented");
    }
}

module.exports = FileSystemItem;