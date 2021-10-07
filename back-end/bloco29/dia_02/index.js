const express = require('express')

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Tudo ok!')
});

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`))