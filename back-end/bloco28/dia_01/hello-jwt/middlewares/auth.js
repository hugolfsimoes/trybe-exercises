const jwt = require('jsonwebtoken');

const secret = 'meuSegredoSuperSecreto';

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};
