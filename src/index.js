const { greet } = require("./greet");

const name = process.argv[2] || "GitHub learner";

console.log(greet(name));
