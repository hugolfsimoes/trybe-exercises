// 1 - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = numero => {
  let resp = numero;
  if (numero === 0)
    console.log(1);
  else {
    while (numero > 2) {
      resp *= numero -= 1;
    }
    console.log(resp);
  }
}
fatorial(5);

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.3

const longestWord = (frase) => {
  let cont = 0;
  let maior;
  const palavras = frase.split(' ');
  for (let key in palavras) {
    if (palavras[key].length > cont) {
      cont = palavras[key].length;
      maior = palavras[key];
    }
  }
  console.log(maior);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

/* 3 - Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.*/

let cont = document.querySelector('p');
let clickCount = 0
const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  clickCount += 1
  cont.innerHTML = clickCount;
})

/* 4-  Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals

Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe".*/

//Função 1
const searchX = (word) => {
  let readyString = 'Olá Sr(a) x ';
  let newString = readyString.replace('x', word);
  return newString;
}
const retornoFuncaoUm = searchX('Fulano');
console.log(searchX('Fulano'));

//Array Global
const skills = ['HTML', 'JavaScript', 'CSS', 'Linux', 'Python'];

//Função 2

const concatString = retornoFuncaoUm => {
  skills.sort();

  return `${retornoFuncaoUm}! Minhas cinco principais habilidades são:
  •${skills[0]}
  •${skills[1]}
  •${skills[2]}
  •${skills[3]}
  •${skills[4]}`;
}

console.log(concatString(retornoFuncaoUm));