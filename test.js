const assert = require('assert');
const { sum } = require('./index.js');
const test = require('baretest')('My app');

test('1+2', async function () {
    const total = sum(1, 2);
    assert.strictEqual(total, 3)
});
test('1+3', async function () {
    const total = sum(1, 3);
    assert.strictEqual(total, 4)
});


test.run();
