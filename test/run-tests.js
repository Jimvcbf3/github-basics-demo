const assert = require("node:assert/strict");
const { greet } = require("../src/greet");

function runTest(name, fn) {
  try {
    fn();
    console.log(`PASS: ${name}`);
  } catch (error) {
    console.error(`FAIL: ${name}`);
    throw error;
  }
}

runTest("greets a provided name", () => {
  assert.equal(greet("Jim"), "Hello, Jim!");
});

runTest("falls back when name is missing", () => {
  assert.equal(greet(), "Hello, stranger!");
});

runTest("trims whitespace around names", () => {
  assert.equal(greet("  GitHub  "), "Hello, GitHub!");
});

console.log("All tests passed.");
