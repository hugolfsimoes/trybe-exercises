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
console.log(listaUlDays);

for (let key in dezDaysList) {
  let criaDay = document.createElement('li')
  criaDay.innerHTML = dezDaysList[key];

  listaUlDays.appendChild(criaDay).className = 'days';
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

