const Adapter = require("./Adapter");

const adapter = new Adapter();

// Client chỉ làm việc với JSON
const jsonRequest = {
    name: "John",
    age: 30
};

console.log("[Client] Send JSON:");
console.log(jsonRequest);

const response = adapter.request(jsonRequest);

console.log("\n[Client] Receive JSON:");
console.log(response);