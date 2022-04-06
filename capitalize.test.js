
const capitalize = require('./capitalize.js');

test('capitalize the first letter on a world', () => {
  expect(capitalize('hello')).toMatch('Hello')
})