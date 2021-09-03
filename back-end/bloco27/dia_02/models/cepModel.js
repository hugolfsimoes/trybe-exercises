const connection = require('./connection');

const cepRegexValidation = /\d{5}-\d{3}/;

const isCepValid = (cep) => {
  if (!cepRegexValidation.test(cep)) return false;

  return true;
};

const removeHifen = (cep) => {
  return cep.replace('-', '');
};

const getAdressByCep = async (cep) => {
  cep = removeHifen(cep);
  const [result] = await connection.execute('SELECT * FROM ceps WHERE cep=?', [
    cep,
  ]);
  if (result.length === 0) return null;

  return result;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  cep = removeHifen(cep);
  const [newAdress] = await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)',
    [cep, logradouro, bairro, localidade, uf]
  );
  return { cep, logradouro, bairro, localidade, uf };
};
module.exports = { isCepValid, getAdressByCep, createCep };
