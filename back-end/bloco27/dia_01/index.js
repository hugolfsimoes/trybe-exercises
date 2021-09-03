const express = require('express');

const User = require('./models/User');

const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!(await User.isValid(firstName, lastName, email, password))) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  const newUser = await User.addUser(firstName, lastName, email, password);
  res.status(201).json(newUser);
});

app.get('/user', async (req, res) => {
  const users = await User.getAllUsers();
  res.status(201).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);
  console.log(user);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;

  const user = await User.getUserById(id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  if (!(await User.isValid(firstName, lastName, email, password))) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  const userUpdate = await User.updateUser(id, {
    firstName,
    lastName,
    email,
    password,
  });

  res.status(201).json(User.updateUser);
});

app.listen(3000, () => console.log('Aplicação rodando na porta 3000'));
