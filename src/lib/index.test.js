const assert = require('chai').assert;
const rebuilder = require('./index');

describe('Proxy wraps correctly', () => {
    it("Rebuilder has escape", () => {
        assert.isFunction(rebuilder.escape, 'escape should be function')
    });

    it("Rebuilder has anchor", () => {
        assert.isFunction(rebuilder.anchor, 'anchor should be function')
    });

    it("Rebuilder has any", () => {
        assert.isFunction(rebuilder.any, 'any should be function')
    });

    it("Rebuilder has words", () => {
        assert.isFunction(rebuilder.words, 'words should be function')
    });

    it("Proper rebuilder chain has escape", () => {
        assert.isFunction(rebuilder.words.escape, 'escape should be function')
    });

    it("Proper rebuilder chain has escape", () => {
        assert.isFunction(rebuilder.escape.any, 'any should be function')
    });

    it("Proper rebuilder chain has escape", () => {
        assert.isFunction(rebuilder.any.words, 'words should be function')
    });

    it("Proper rebuilder chain has escape", () => {
        assert.isFunction(rebuilder.words.escape.any, 'any should be function')
    });

    it("Proper rebuilder chain with invalid ending returns undefined", () => {
        assert.isFunction(rebuilder.words.escape.any.wrongProperty, 'wrong props should be undefined')
    });

    it("Rebuilder returns undefined when incorrect property called", () => {
        assert.isUndefined(rebuilder.wrongProperty, 'wrong props should be undefined')
    });
});
