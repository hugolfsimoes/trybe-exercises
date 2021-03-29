/*Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .*/
const infoPeople = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {
    fullName,
    email: `${email}@trybe.com`
  }
};
const newEmployees = (callback) => {
  const employees = {
    id1: infoPeople('Pedro Guerra'),
    id2: infoPeople('Luiza Drumond'),
    id3: infoPeople('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(infoPeople));