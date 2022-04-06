const reverseString = require('./reverse_string')

it('reverseString', () => {
  expect(reverseString('Andre')).toMatch('erdnA');
})