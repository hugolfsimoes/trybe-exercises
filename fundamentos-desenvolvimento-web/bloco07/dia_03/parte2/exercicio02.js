const assert = require('assert');
const wordLengths = (arr) => {
  const arrayNovo = [];
  for (let index = 0; index < arr.length; index += 1) {
    arrayNovo[index] = arr[index].length;
  }
  return arrayNovo;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);