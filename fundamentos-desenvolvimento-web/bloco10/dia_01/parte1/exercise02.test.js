const { test, expect } = require('@jest/globals');
const myRemove = require('./exercise02');

test('Retorn array sem o elemento indicado', ()=>{
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
  expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
})