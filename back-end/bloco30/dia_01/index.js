const { application } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const plantsModule = require('./plants');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/plants', (req, res) => {
  const plants = plantsModule.getPlants();
  res(200).json(plants);
});
app.get('/plant/:id', (req, res) => res.send('Hello World!'));
app.delete('/plant/:id', (req, res) => res.send('Hello World!'));
app.post('/plant/:id', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
