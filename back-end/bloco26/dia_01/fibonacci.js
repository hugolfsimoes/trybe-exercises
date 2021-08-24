const readline = require("readline-sync");

const num = readline.questionInt("Digite um número maior que 0 \n");

function calculoFibonacci(fib) {
  let a = 0,
    b = 1,
    c = 1;

  for (let index = 0; index <= fib; index += 1) {
    c = a + b;
    a = b;
    b = c;
  }
  console.log(c);
}
