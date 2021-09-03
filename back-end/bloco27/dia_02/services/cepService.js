isCepValid = (cep) => {
  if (cep.length !== 8) return { message: 'Cep deve ter 8 dígitos ' };
  return {};
};

module.exports = { isCepValid };
