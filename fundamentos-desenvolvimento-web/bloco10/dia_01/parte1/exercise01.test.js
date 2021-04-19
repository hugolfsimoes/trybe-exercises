const { test, expect } = require('@jest/globals')
const sum = require('./exercise01')

test('Soma de dois valores', ()=>{
  expect(sum(4,5)).toBe(9);
  expect(sum(0,0)).toBe(0);
  //expect(sum(4,'5')).toBe('parameters must be numbers');
})