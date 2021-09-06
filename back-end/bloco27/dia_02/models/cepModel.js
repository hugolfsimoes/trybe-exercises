const connection = require('./connection');
const cepService = require('../services/cepService');

const getAdressByCep = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM ceps WHERE cep=?', [
    cep,
  ]);
  if (result.length === 0) return null;

  return result;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const [newAdress] = await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)',
    [cep, logradouro, bairro, localidade, uf]
  );
  return { cep, logradouro, bairro, localidade, uf };
};
module.exports = { getAdressByCep, createCep };
