/** @format */

const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secret = 'meuSegredoSuperSecreto';

const bodyValidate = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

// eslint-disable-next-line max-lines-per-function
module.exports = async (req, res, next) => {
  const { error } = bodyValidate(req.body);
  if (error) return next(error);
  if (req.body.username !== 'admin' && req.body.password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }
  const admin =
    req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';
  const payload = {
    username: req.body.username,
    admin,
  };
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  res.status(200).json(token);
};
