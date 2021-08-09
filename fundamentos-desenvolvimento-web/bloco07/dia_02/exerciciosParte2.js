const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addManha = (objeto, key, valor) => {
  objeto[key] = valor
}
addManha(lesson2, 'turno', 'manha');


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaKeys = (objeto) => {
  console.log(Object.keys(objeto));
}
listaKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.

const tamObjeto = (objeto) => {
  return Object.keys(objeto).length;
}
console.log(tamObjeto(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listaValores = (objeto) => {
  return Object.values(objeto);
}

console.log(listaValores(lesson1));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, {
  lesson1,
  lesson2,
  lesson3
})
console.log(allLessons);

// Usando o objeto criado no exercício anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const somaEstudantes = (objeto) => {
  const keys = Object.keys(objeto);
  let estudantes = 0;
  for (let index = 0; index < keys.length; index += 1) {
    const chaveAtual = keys[index];
    estudantes += objeto[chaveAtual].numeroEstudantes;
  }
  return estudantes;
}

console.log(somaEstudantes(allLessons));


// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const pegaValorDaChave = (objeto, posicao) => {
  return Object.values(objeto)[posicao];
}

console.log(pegaValorDaChave(lesson1, 0));

// Crie uma função que verifique se o par(chave / valor) existe na função.Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verificaChaveValor = (objeto, chave, valor) => {

  const array = Object.entries(objeto);
  let contem = false;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index][0] === chave && array[index][1] === valor) {
      contem = true;
    }
  }
  return contem;
}

console.log(verificaChaveValor(lesson3, 'turno', 'noite'));