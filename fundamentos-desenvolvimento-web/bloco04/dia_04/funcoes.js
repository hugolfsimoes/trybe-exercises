//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindromo(palavra) {
  let arrayLetras = palavra.split("");
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(verificaPalindromo("arara"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let array = [2, 3, 6, 7, 10, 1];

function indiceMaiorNumero(numeros) {
  var maior = 0;
  var posicao;
  for (let index in numeros) {
    if (numeros[index] > maior) {
      maior = numeros[index];
      posicao = index;
    }
  }
  return posicao;
}

console.log(indiceMaiorNumero(array));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let array2 = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorNumero(numeros) {
  let menor = 0;
  let posicao;
  for (let index in numeros) {
    if (numeros[index] < menor) {
      menor = numeros[index];
      posicao = index;
    }
  }
  return posicao;
}

console.log(indiceMenorNumero(array2));


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let array3 = [2, 3, 2, 5, 8, 2, 3];

function numeroMaisRepete(numeros) {
  cont = 0;
  let repete = 0;
  let resultado;
  for (let index in numeros) {
    cont = 0;
    for (indexDois in numeros) {
      if (numeros[index] === numeros[indexDois]) {
        cont += 1;
      }
      if (cont > repete) {
        repete = cont;
        resultado = numeros[index];
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

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
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