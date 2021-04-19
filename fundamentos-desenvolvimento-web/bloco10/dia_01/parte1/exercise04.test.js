const { test, expect } = require('@jest/globals');
const myFizzBuzz = require('./exercise04');

test('Retorna uma string especifica dependendo do numero', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  expect(myFizzBuzz(9)).toEqual('fizz');
  expect(myFizzBuzz(10)).toEqual('buzz');
  expect(myFizzBuzz(4)).toEqual(4);
  expect(myFizzBuzz('4')).toEqual(false);
});