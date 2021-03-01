let a = Math.ceil(Math.random() * 1000);
console.log("Número um: " + a);

let b = Math.ceil(Math.random() * 1000);
console.log("Número dois: " + b);

let c = Math.ceil(Math.random() * 1000);
console.log("Número três: " + c);







//Adição
function sum(numUm, numDois) {
  var result = numUm + numDois;
  console.log(numUm + " + " + numDois + " =  " + result);
}
sum(a, b);

//Subtração

function subt(numUm, numDois) {
  var result = a - b;
  console.log(numUm + " - " + numDois + " = " + result);
}
subt(a, b);

//Multiplicação
function mult(numUm, numDois) {
  var result = numUm * numDois;
  console.log(numUm + " x " + numDois + " = " + result);
}
mult(a, b);
//DIvisão
function div(numUm, numDois) {
  var result = numUm / numDois;
  console.log(numUm + " ÷ " + numDois + " = " + result);
}
div(a, b);

//Módulo
function mod(numUm, numDois) {
  var result = numUm % numDois;
  console.log("O resto da divisão de " + numUm + " ÷ " + numDois + " = " + result);
}
mod(a, b);

//Maior de dois números

function maiorDeDoisNumeros(numUm, numDois) {

  if (numUm > numDois) {

    console.log("O maior número é " + numUm);
  } else if (numDois > numUm) {
    console.log("O maior número é " + numDois);
  } else {
    console.log("Os números são iguais");
  }

}

maiorDeDoisNumeros(a, b);

//Maior de três números

function maiorDeTresNumeros(numUm, numDois, numTres) {

  if (numUm > numDois && numUm > numTres) {
    console.log("O maior número é " + numUm);
  } else if (numDois > numUm && numDois > numTres) {
    console.log("O maior número é " + numDois);
  } else if (numTres > numUm && numTres > numDois) {
    console.log("O maior número é " + numTres);
  } else {
    console.log("Os números são iguais");
  }

}
maiorDeTresNumeros(a, b, c);

//Positivo ou Negativo

function positiveOrNegative(numUm) {
  if (numUm > 0) {
    console.log("O número " + numUm + " é positivo");
  } else if (numUm < 0) {
    console.log("O número " + numUm + " é negativo");

  } else {
    console.log("O número " + numUm + " é zero");

  }
}

positiveOrNegative(a);

//Triângulo
function triangulo(anguloA, anguloB, anguloC) {
  if (anguloA + anguloB + anguloC == 180) {
    console.log(true);
  } else {
    console.log("erro");
  }
}
triangulo(a, b, c);

//Xadrez
let peca = "Peão";

function xadrez(peca) {

  peca = peca.toLowerCase();

  switch (peca) {
    case "rei":
      console.log("Rei : Mover para qualquer direção, uma casa por vez");
      break;

    case "dama":
      console.log("Dama: Mover para qualquer direção, quantas casas quiser(se estiverem livres)");
      break;

    case "torre":
      console.log("Torre: Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
      break;

    case "bispo":
      console.log("Bispo: Move-se na diagonal, quantas casas quiser.");
      break;

    case "cavalo":
      console.log("Cavalo: Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.");
      break;

    case "peão":
      console.log("Peão: Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
      break;

    default:
      console.log("Peça não encontrada");


  }
}

xadrez(peca);

//Porcentagem
let nota = Math.ceil(Math.random() * 100);

function notaPorcentagem(nota) {


  if (nota >= 90 && nota < 100) {
    console.log("A");
  } else if (nota >= 80 && nota < 90) {
    console.log("B");
  } else if (nota >= 70 && nota < 80) {
    console.log("C");
  } else if (nota >= 60 && nota < 70) {
    console.log("D");
  } else if (nota >= 50 && nota < 60) {
    console.log("E");
  } else if (nota < 50) {
    console.log("F");
  } else if (nota < 0 || nota > 100) {
    console.log("Nota inválida");
  }
}
notaPorcentagem(nota);

//Par

function par(numUm, numDois, numTres) {

  console.log((a % 2 == 0 && b % 2 == 0 && c % 2 == 0));
}
par(a, b, c, );


//Ímpar

function impar(numUm, numDois, numTres) {

  console.log((a % 2 != 0 && b % 2 != 0 && c % 2 != 0));
}
impar(a, b, c, );

//Lucro

let custo = 10.50;
let valorVenda = 25.30;

function lucro(custo, valorVenda) {

  let lucroPorProduto
  let lucroTotal;


  custo += custo * 0.2;

  lucroPorProduto = valorVenda - custo;
  console.log("Lucro por produto " + lucroPorProduto.toFixed(2));

  console.log((lucroTotal = lucroPorProduto * 1000).toFixed(2));
}

lucro(custo, valorVenda);

//Trabalhador
let salarioBruto = 3000;

function impostos(salarioBruto) {
  let salarioBase;
  let salarioLiquido;
  let inss;
  let ir;

  //INSS
  if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto ** 0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
  } else if (salarioBruto > 5189.82) {
    inss = 570.88;
  }
  salarioBase = salarioBruto - inss;

  //IR

  if (salarioBase <= 1903.98) {
    ir = 0;
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354, 80
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13
  } else if (salarioBase > 46664.68) {
    ir = (salarioBase * 0.275) - 867.36
  }
  salarioLiquido = salarioBase - ir;

  console.log("Bruto: R$ " + salarioBruto.toFixed(2));
  console.log("INSS: R$ " + inss.toFixed(2));
  console.log("Base: R$ " + salarioBase.toFixed(2));
  console.log("IR: R$ " + ir.toFixed(2));
  console.log("Liquido: R$ " + salarioLiquido.toFixed(2));
}
impostos(salarioBruto);

//