const readline = require("readline-sync");

function acerteNumero() {
  let randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
  const answerNumber = readline.questionInt(
    "Advinhe o número inteiro de 0 a 10    "
  );

  console.log(
    answerNumber !== randomNumber
      ? `Opa, não foi dessa vez. O número era ${randomNumber}`
      : "Parabéns, número correto!"
  );

  const playAgain = readline.question("Quem jogar de novo? (s / n)");
  playAgain === "s" ? acerteNumero() : console.log("Até a próxima");
}

module.exports = acerteNumero;
