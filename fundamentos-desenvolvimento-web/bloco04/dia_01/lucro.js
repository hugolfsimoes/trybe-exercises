let custo = 10.50;
let valorVenda = 25.30;
let lucroPorProduto
let lucroTotal;


custo += custo * 0.2;

lucroPorProduto = valorVenda - custo;
console.log("Lucro por produto" + lucroPorProduto.toFixed(2));

console.log((lucroTotal = lucroPorProduto * 1000).toFixed(2));