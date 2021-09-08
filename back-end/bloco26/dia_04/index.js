const express = require("express");
const bodyParser = require("body-parser");

const simpsonsData = require("./readSimpsons");

const app = express();

app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age) > 17) {
    res.status(200).json({ message: `Hello, ${name}` });
    return;
  }

  res.status(401).json({ message: `Unauthorized` });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;

  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get("/simpsons", (req, res) => {});

app.listen("3001", () => {
  console.log("Aplicação rodando na porta 3001");
});