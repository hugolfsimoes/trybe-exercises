let n = Math.ceil((Math.random() * 20));
let auxEspaco = n - 1;
let auxAterisco = 1;
let resposta = "";
console.log(n);

for (let vertical = 0; vertical < n; vertical++) {
  resposta = "";

  for (let espaco = 0; espaco < auxEspaco; espaco++) {

    resposta += "   ";

  }
  for (let z = 0; z < auxAterisco; z++) {
    resposta += " * "

  }
  auxEspaco--;
  auxAterisco++;
  console.log(resposta);

}