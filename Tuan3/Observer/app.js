const Stock = require("./Stock");
const Investor = require("./Investor");

const Task = require("./Task");
const TeamMember = require("./TeamMember");

// ===== STOCK =====
const stock = new Stock("AAPL", 150);

const inv1 = new Investor("Alice");
const inv2 = new Investor("Bob");

stock.subscribe(inv1);
stock.subscribe(inv2);

stock.setPrice(155);
stock.setPrice(160);


// ===== TASK =====
const task = new Task("Design UI", "Pending");

const mem1 = new TeamMember("John");
const mem2 = new TeamMember("Emma");

task.subscribe(mem1);
task.subscribe(mem2);

task.setStatus("In Progress");
task.setStatus("Done");