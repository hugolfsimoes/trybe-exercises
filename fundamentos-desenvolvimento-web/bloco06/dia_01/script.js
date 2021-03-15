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