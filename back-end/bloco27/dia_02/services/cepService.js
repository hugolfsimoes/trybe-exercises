const Cep = require('../models/cepModel');
const cepRegexValidationGet = /\d{5}-?\d{3}/;
const cepRegexValidationPost = /\d{5}-\d{3}/;

const isCepValidGet = (cep) => {
  if (!cepRegexValidationGet.test(cep))
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  return {};
};

const isCepValidPost = (cep) => {
  if (!cepRegexValidationPost.test(cep)) return false;
  return true;
};

const removeHifen = (cep) => {
  return cep.replace('-', '');
};

const getAdressByCep = async (cep) => {
  const { error } = isCepValid(cep);
  if (error) return error;
  cep = removeHifen(cep);
  const address = await Cep.getAdressByCep(cep);
  if (!address)
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };

  return address;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  if (!isCepValidPost(cep)) return false;
  const newAddress = await Cep.createCep(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );
};

module.exports = {
  getAdressByCep,
  createCep,
};
