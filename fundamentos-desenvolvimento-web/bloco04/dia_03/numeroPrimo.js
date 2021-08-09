let n = Math.ceil((Math.random() * 100));
let cont = 0;
let teste
console.log(n);

for (let i = 0; i <= n; i++) {
  if (n % i == 0 && n != 1) {
    cont++;
  } else if (n === 1 || n === 0) {
    cont + 3;
  }
}


if (cont > 2 || n === 0) {
  console.log("O número não é primo");
} else {
  console.log("O número é primo");
}