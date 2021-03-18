new window.JustValidate('.js-form');
const datePicker = document.getElementById('input-data');
datePicker.DatePickerX.init({
  format: 'dd/mm/yyyy'
});
new JustValidate('.js-form', {
  rules: {
    text3: {
      required: true,
    },
    text2: {
      required: true,
      maxLength: 5
    }
  }
});

let arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
const selectEstado = document.querySelector('#select-estado');

function adicionaEstados() {
  for (index = 0; index < arrayEstados.length; index += 1) {
    const criaEstado = document.createElement('option');
    criaEstado.innerHTML = arrayEstados[index];
    criaEstado.value = arrayEstados[index];
    selectEstado.appendChild(criaEstado);
  }
}
adicionaEstados();

const apt = document.querySelector('#radio-apt');
const casa = document.querySelector('#radio-casa')

function validaTipo() {
  if (apt.checked !== true) {
    apt.className += ' resposta';
  } else if (casa.checked !== true) {
    casa.className += ' resposta';
  }
}
validaTipo();

const resposta = document.querySelectorAll('.resposta');
const inputs = document.querySelectorAll('input');
const divRespostas = document.querySelector('#div-respostas');
const dataInicio = document.querySelector('#input-data');
const btnEnviar = document.querySelector('#btn-enviar');
btnEnviar.addEventListener('click', (event) => {
  let dataSeparada = dataInicio.value.split('/');
  let dia = dataSeparada[0];
  let mes = dataSeparada[1];
  let ano = dataSeparada[2];

  if (dia <= 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0) {
    alert('Data de Início incorreta');
    event.preventDefault();
  } else {
    validaTipo();
    for (index = 0; index < resposta.length; index += 1) {
      const criaResposta = document.createElement('p');
      criaResposta.innerHTML = resposta[index].value;
      divRespostas.appendChild(criaResposta);
    }
    event.preventDefault();
  }
});