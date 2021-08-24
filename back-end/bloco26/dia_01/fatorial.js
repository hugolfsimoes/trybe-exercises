const readline = require("readline-sync");

function calculoFatorial(fat) {
  const fatorial = readline.questionInt("Digite um número maior que 0\n");
  if (fat === 0 || fat === 1) {
    console.log(1);
  } else {
    console.log(fat * calculoFatorial(fat - 1));
  }
}

module.exports = calculoFatorial;
