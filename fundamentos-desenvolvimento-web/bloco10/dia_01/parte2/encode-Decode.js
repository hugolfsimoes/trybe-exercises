function encode(word) {
  let resultado = word;
  for (let index = 0; index < resultado.length; index += 1) {
    resultado = resultado.replace('a', '1');
    resultado = resultado.replace('e', '2');
    resultado = resultado.replace('i', '3');
    resultado = resultado.replace('o', '4');
    resultado = resultado.replace('u', '5');
  }
  return resultado;
}

function decode(word) {
  let resultado = word;
  for (let index = 0; index < resultado.length; index += 1) {
    resultado = resultado.replace('1', 'a');
    resultado = resultado.replace('2', 'e');
    resultado = resultado.replace('3', 'i');
    resultado = resultado.replace('4', 'o');
    resultado = resultado.replace('5', 'u');
  }
  return resultado;
}

const functions = { encode, decode };
module.exports = functions;