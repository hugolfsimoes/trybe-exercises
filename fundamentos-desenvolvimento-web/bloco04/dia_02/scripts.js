let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
let maior = numbers[0];
let impares = 0;
let menor = numbers[0];
let divisao;

//Exercicio 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Exercício 02 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
for (i = 0; i < numbers.length; i++) {
  soma += numbers[i];

}
console.log("Soma dos numeros = " + soma);

//Exercício 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

media = soma / numbers.length;
console.log("Média Aritimética: " + media);

//Exercício 04 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}

//Exercício 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

for (i = 0; i < numbers.length; i++) {
  if (maior < numbers[i]) {
    maior = numbers[i];
  }
}
console.log("O maior número é : " + maior);

//Exercício 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    impares++;
  }
}
console.log("Existem " + impares + " valores ímpares no array");

//Exercício 0 -Utilizando for , descubra qual o menor valor contido no array e imprima-o;

for (i = 0; i < numbers.length; i++) {
  if (menor > numbers[i]) {
    menor = numbers[i];
  }
}
console.log("O menor número é : " + menor);

//Exercício 08 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
console.log("Segundo Array : " + array);

//Exercício 09 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (i = 0; i < array.length; i++) {
  console.log(array[i] + " / 2 = " + array[i] / 2);
}