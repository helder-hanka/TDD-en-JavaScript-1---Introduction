const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');


// give the test suite a label using describe
describe('capitalizeFirstLetters', () => {
    // give the test a label using it
    it('Is function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('Transforme javaScript correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });
    
    it('Works with a 1_character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });

    it('Works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});