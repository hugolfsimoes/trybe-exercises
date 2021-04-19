const { test, expect } = require('@jest/globals');
const sum = require('./exercise01')

describe('Soma de dois valores', () => {
  test('4 + 5 é igual a 9', () => {
    expect(sum(4,5)).toEqual(9);
  });

  test('0 + 0 é igual a 0', () => {
    expect(sum(0,0)).toEqual(0);
  });

  test('throw an error when a string is passed', () => {
    expect(()=>{
      sum(4,'5');
    }).toThrow();
  });

  test('error message is "parameters must be numbers"', () => {
    expect(()=>{
      sum(4,'5');
    }).toThrow(/parameters must be numbers/);
  });

});
