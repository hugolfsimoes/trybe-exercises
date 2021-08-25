const readline = require("readline-sync");

function calculaIMC() {
  const peso = readline.questionFloat("Qual o seu peso?   ");
  const alturaCm = readline.questionInt("Qua sua altura em cm?  ");
  const imc = (peso / Math.pow(alturaCm / 100, 2)).toFixed(2);

  if (imc < 18.5) {
    console.log(`O seu IMC é ${imc} e você está abaixo do peso (magreza)`);
    return;
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`O seu IMC é ${imc} você está com peso normal`);
    return;
  } else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`O seu IMC é ${imc} você está acima do peso (sobrepeso)`);
    return;
  } else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`O seu IMC é ${imc} você está com Obesidade grau I`);
    return;
  } else if (imc >= 35.0 && imc <= 39.9) {
    console.log(`O seu IMC é ${imc} você está com Obesidade grau II`);
    return;
  } else if (imc >= 40.0) {
    console.log(`O seu IMC é ${imc} você está com Obesidade graus III e IV`);
    return;
  }
}

module.exports = calculaIMC;
