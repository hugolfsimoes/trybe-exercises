const assert = require('assert');


const greetPeople = (people) => {
  let greeting = 'Hello ';
  let arrayNovo = [];
  for (let index = 0; index < people.length; index += 1) {
    arrayNovo[index] = greeting + people[index];
  }
  return arrayNovo;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result)