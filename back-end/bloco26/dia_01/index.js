const readline = require("readline-sync");

const calculaIMC = require("./imc");
const calculaVelocidadeMedia = require("./velocidade");
const acerteNumero = require("./sorteio");
const calculoFatorial = require("./fatorial");

function choseScript() {
  const script = readline.questionInt(
    "Qual script deve ser executado? \n1 - IMC \n2 - Velocidade \n3 - Sorteio \n"
  );

  if (script === 1) {
    calculaIMC();
    return;
  } else if (script === 2) {
    calculaVelocidadeMedia();
    return;
  } else if (script === 3) {
    acerteNumero();
    return;
  } else if (script === 4) {
    const fatorial = readline.questionInt("Digite um número maior que 0\n");
    calculoFatorial(fatorial);
  } else {
    console.log("Não existe essa opção");
    choseScript();
  }
}
choseScript();
