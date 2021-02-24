let salarioBruto = 1505;
let salarioBase;
let salarioLiquido;
let inss;
let ir;

//INSS
if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && <= 2594.92) {
  inss = salarioBruto ** 0.09;
} else if (salarioBruto >= 2594.93 && <= 5189.82) {
  inss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  inss = 570.88;
}
salarioBase = salarioBruto - inss;

//IR

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  ir = salarioBase * 7.5;
}