const Subject = require("./Subject");

class Task extends Subject {
    constructor(name, status) {
        super();
        this.name = name;
        this.status = status;
    }

    setStatus(newStatus) {
        console.log(`\n[Task] ${this.name} changed to ${newStatus}`);
        this.status = newStatus;
        this.notify({ name: this.name, status: this.status });
    }
}

module.exports = Task;