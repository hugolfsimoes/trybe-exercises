let n = Math.ceil((Math.random() * 20));

let teste;
console.log(n);

for (let indexHorizontal = 0; indexHorizontal < n; indexHorizontal += 1) {
  teste = "";
  for (let indexVertical = 0; indexVertical < n; indexVertical += 1) {
    teste += " * ";
  }
  console.log(teste);
}