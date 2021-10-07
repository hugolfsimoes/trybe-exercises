const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const text = process.env.TEXT || 'Não pegou';

app.get('/', (req, res) => {
  res.send(text + 'Procfile');
});


app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`))