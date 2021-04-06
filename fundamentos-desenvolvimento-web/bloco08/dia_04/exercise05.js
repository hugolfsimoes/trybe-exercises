// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let cont = 0;
  const searchA = names.reduce((acc, curr) => acc.concat(curr)).toLowerCase();
  for (const key in searchA) {
    if (searchA[key] === 'a') {
      cont += 1;
    }
  }
  return cont;
}



assert.deepStrictEqual(containsA(), 20);