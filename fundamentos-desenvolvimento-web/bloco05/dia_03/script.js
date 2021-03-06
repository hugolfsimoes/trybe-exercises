function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 1:
/*O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos / filhas da tag < ul > com ID "days".Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda - feira e Terça - feira.
  Os dias devem estar contidos em uma tag < li > , e todos devem ter a classe day.Ex: < li class = "day" > 3 < /li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.Ex: < li class = "day holiday" > 24 < /li>
Os dias 4, 11, 18 e 25 são Sexta - feira.Eles devem conter a classe day e a classe friday.Ex: < li class = "day friday" > 4 < /li>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let listaUlDays = document.querySelector('#days');

for (let key in dezDaysList) {
  let criaDay = document.createElement('li')
  criaDay.innerHTML = dezDaysList[key];

  listaUlDays.appendChild(criaDay).className = 'day';
  if (dezDaysList[key] === 24 || dezDaysList[key] === 25 || dezDaysList[key] === 31) {
    criaDay.className += ' holiday';
  }

  if (dezDaysList[key] === 4 || dezDaysList[key] === 11 || dezDaysList[key] === 18 || dezDaysList[key] === 25) {
    criaDay.className += ' friday';
  }
}

//Exercício 2:
/*Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/
let tagDiv = document.querySelector('.buttons-container');

function CriaBotaoFeriados(feriados) {

  criaBtn = document.createElement('button');
  criaBtn.innerHTML = feriados;
  criaBtn.id = 'btn-holiday';
  tagDiv.appendChild(criaBtn);
}

CriaBotaoFeriados("Feriados");


//Exercício 3:
/*Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/

let botaoFeriados = document.querySelector('#btn-holiday');
let dayHoliday = document.querySelectorAll('.holiday ');

botaoFeriados.addEventListener('click', mudaCorHoliday);

function mudaCorHoliday(event) {

  for (let key in dayHoliday) {
    if (dayHoliday[key].style.backgroundColor !== "green") {
      dayHoliday[key].style.backgroundColor = 'green';
    } else {
      dayHoliday[key].style.backgroundColor = 'rgb(238,238,238)';
    }
  }

}

/*Exercício 4:
  Implemente uma função que receba como parâmetro a string "Sexta-feira"
e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday".
Adicione este botão como filho / filha da tag < div > com classe "buttons-container".*/

function criaBotaoSexta(sexta) {
  criaBtn = document.createElement('button');
  criaBtn.innerHTML = sexta;
  tagDiv.appendChild(criaBtn);
  criaBtn.id = 'btn-friday';
}

criaBotaoSexta('Sexta-feira');

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */


let btnFriday = document.querySelector('#btn-friday');
let dayFriday = document.querySelectorAll('.friday');
let lastFriday = [4, 11, 18, 25];


btnFriday.addEventListener('click', trocaTextoSexta);

function trocaTextoSexta(event) {

  for (let key = 0; key < dayFriday.length; key += 1) {
    if (dayFriday[key].innerHTML !== "SEXTOU") {
      dayFriday[key].innerHTML = "SEXTOU";
    } else {
      dayFriday[key].innerHTML = lastFriday[key]
    }
  }
  event.preventDefault();
}

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target . */
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();


/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */
let divTask = document.querySelector('.my-tasks');

function tarefa(acao) {

  let criaTask = document.createElement('span');
  criaTask.innerText = acao;
  divTask.appendChild(criaTask)
};

tarefa('MALHAAAAR');

/* Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */


function legend(cor) {

  let task = document.querySelector('span');
  let criaDivTask = document.createElement('div');
  criaDivTask.className = 'task';
  divTask.appendChild(criaDivTask);
  criaDivTask.style.backgroundColor = cor;
}

legend('yellow');

/* Exercício 9:
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */


function taskSelected() {
  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let tarefa = document.querySelector('.task');
  tarefa.addEventListener('click', function (event) {
    if (tarefaSelecionada.length === 0) {
      tarefa.className = "task selected";
    } else {
      event.target.className = 'task';
    }

  })

}
taskSelected();


/* Exercício 10
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) . */
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();