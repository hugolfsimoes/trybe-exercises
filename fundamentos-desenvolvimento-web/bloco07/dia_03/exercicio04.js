const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.deepStrictEqual(myFizzBuzz(9), 'fizz');
assert.deepStrictEqual(myFizzBuzz(20), 'buzz');
assert.strictEqual(myFizzBuzz(11), 11);
assert.deepStrictEqual(myFizzBuzz('ola'), false);