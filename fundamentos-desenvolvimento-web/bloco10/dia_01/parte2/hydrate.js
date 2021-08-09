function hydrate(frase) {
  let bebidas = frase.match(/\d+/g);
  console.log(bebidas);
  let soma = 0;

  soma = bebidas.reduce((acc, curr)=>{
    return Number(acc) + Number(curr);
  },0);
  console.log(typeof soma);

  if(soma === 1){
    return `${soma} copo de água`
  }
  return `${soma} copos de água`

}
console.log((hydrate('1 copo de cerveja')));
module.exports = hydrate