//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
let palavra = "amor";

function palindromo(palavra) {
  let contrario = ("");
  console.log(contrario);
  contrario = "";
  console.log(contrario);
  for (let index = palavra.length; index >= 0; index--) {
    contrario += palavra[index];
  }
  console.log(contrario);
}


palindromo(palavra);

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let array = [2, 3, 6, 7, 10, 1];

function maiorNumero(array) {
  var maior = 0;
  var posicao;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
      posicao = index;
    }
  }
  return posicao;
}

console.log(maiorNumero(array));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let array2 = [2, 4, 6, 7, 10, 0, -3];

function menorNumero(array) {
  let menor = 0;
  let posicao;
  for (let index = 0; index < array2.length; index += 1) {
    if (array[index] < menor) {
      menor = array[index];
      posicao = index;
    }
  }
  return posicao;
}

console.log(menorNumero(array2));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let array3 = [2, 3, 2, 5, 8, 2, 3];

function numeroMaisRepete(array) {
  cont = 0;
  let repete = 0;
  let resultado;
  for (let index = 0; index < array.length; index += 1) {
    cont = 0;
    for (indexDois = 1; indexDois < array3.length; indexDois += 1) {
      if (array3[index] === array3[indexDois]) {
        cont += 1;
      }
      if (cont > repete) {
        repete = cont;
        resultado = array[index];
      }

    }

  }
  return resultado;
}

console.log(numeroMaisRepete(array3));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let n = 5;

function somatorio(n) {
  let somatorio = 0;
  for (let index = 1; index <= n; index += 1) {
    somatorio += index;
  }
  return somatorio;
}

console.log(somatorio(n));

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
let word = "trybe";
let final = "be";

function verificaFimPalavra(word, ending) {
  let cont = 0;
  let indexEnding = 0;
  for (let index = (word.length - ending.length); index < word.length; index += 1) {
    if (word[index] === ending[indexEnding]) {
      cont += 1;
      indexEnding += 1;
    } else {
      break;
    }

  }
  if (cont === final.length) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaFimPalavra(word, final));