const express = require('express');
const Joi = require('joi');

const CepModel = require('./models/cepModel');

const app = express();
app.use(express.json());

app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;
  if (!CepModel.isCepValid(cep)) {
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }
  const foundCep = await CepModel.getAdressByCep(cep);
  if (!foundCep) {
    return res
      .status(404)
      .json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  }

  return res.status(200).json({ foundCep });
});

app.post('/cep', async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: '<mensagem do Joi>' } });
  }

  if (!CepModel.isCepValid(cep)) {
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }
  const foundCep = await CepModel.getAdressByCep(cep);
  if (foundCep) {
    return res
      .status(409)
      .json({ error: { code: 'alreadyExists', message: 'CEP já existente' } });
  }

  const newAdress = await CepModel.createCep(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );
  res.status(201).json(newAdress);
});
app.listen(3000, () => console.log('Aplicação rodando na porta 3000'));
