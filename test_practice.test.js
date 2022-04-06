const stringLength = require('./test_practice')

it('string', () => {
    expect(stringLength("Andre")).toBeGreaterThan(0);
    expect(stringLength("Andre")).toBeLessThan(10);
})