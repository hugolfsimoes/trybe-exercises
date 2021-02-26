let n = 7; //Math.ceil((Math.random() * 20));
let aux = n;
let aux2 = 1;

let teste = "";
console.log(n);

for (let vertical = 1; vertical < n; vertical += 2) {
  teste = "";
  for (let espaco = 0; Math.floor(aux / 2) >= espaco; espaco++) {

    teste += " - "

    aux--;
  }
  for (let asterisco = 0; asterisco < aux2; asterisco++) {
    teste += " * "
  }


  console.log(teste);
  console.log("");


}