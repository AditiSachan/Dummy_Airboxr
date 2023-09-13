const add = require('./sample');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
    // expect(add(2,3)).toBe(6);
});