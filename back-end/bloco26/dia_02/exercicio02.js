const calculo = require("./exercicio01");

function callCalculo() {
  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1);

  calculo(num1, num2, num3)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

callCalculo();
