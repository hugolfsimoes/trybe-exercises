const assert = require('assert');
const sumAllNumbers = (array) => {
  let sum = 0;
  for (let key in array) {
    sum += array[key];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);