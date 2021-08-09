let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Valor esperado no console: Bem-vinda, Margarida

console.log("Bem vinda, " + info.personagem);
console.log("----------------------------------------------------------------");

// 2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

info['recorrente'] = "Sim";

console.log(info);
console.log("----------------------------------------------------------------");

//3 - Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
  console.log(key);
}
console.log("----------------------------------------------------------------");

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let key in info) {
  console.log(info[key]);
}
console.log("----------------------------------------------------------------");

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas ",
  recorrente: "Sim"
};

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.origem);
if (info.recorrente === "Sim" && info2.recorrente === "Sim") {
  console.log("Ambos recorrentes");
} else if (info.recorrente === "Não" && info2.recorrente === "Não") {
  console.log("Ambos não recorrentes");
} else if (info.recorrente === "Sim" && info2.recorrente === "Não") {
  console.log(info.personagem + "recorrente, " + info2.personagem + " não recorrente");
} else {
  console.log(info.personagem + "não recorrente, " + info2.personagem + " recorrente");
}