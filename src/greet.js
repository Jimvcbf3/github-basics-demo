function greet(name) {
  if (!name || typeof name !== "string") {
    return "Hello, stranger!";
  }

  return `Hello, ${name.trim()}!`;
}

module.exports = { greet };
