const calculo = require("./exercicio01");

async function callCalculo() {
  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1);

  try {
    const resultado = await calculo(num1, num2, num3);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

callCalculo();
