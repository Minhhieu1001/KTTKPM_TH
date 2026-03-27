const Observer = require("./Observer");

class TeamMember extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    update(data) {
        console.log(`Member ${this.name} notified: Task ${data.name} = ${data.status}`);
    }
}

module.exports = TeamMember;