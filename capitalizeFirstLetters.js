// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters (input) {
    return input.length > 0
    ? input[0].toUpperCase() + input.split()
    : '';
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

assert.strictEqual(capitalizeFirstLetters(''), '');

