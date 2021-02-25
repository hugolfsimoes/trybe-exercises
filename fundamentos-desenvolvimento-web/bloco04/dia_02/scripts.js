let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

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