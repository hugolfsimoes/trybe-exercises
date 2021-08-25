const readine = require("readline-sync");

function calculaVelocidadeMedia() {
  const distancia = readine.questionFloat("Qual a distância? (metros)");
  const tempo = readine.questionInt("Quanto tempo (segundos) ");
  console.log(`A velocidade média é ${distancia / tempo}`);
}

module.exports = calculaVelocidadeMedia;
