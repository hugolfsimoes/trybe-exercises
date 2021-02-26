/*Por fim, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

     *
    ***
   *****                                    */



let n = 5; //Math.ceil((Math.random() * 20));
let lineIndex;
let lineColumn;
let lineInput = "";
let symbol = '*';
console.log(n);

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let ControlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > ControlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + " ";
    }
  }

  console.log(lineInput);
  lineInput = "";
  ControlRight -= 1;
  controlLeft += 1;
}