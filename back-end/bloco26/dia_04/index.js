const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen("3001", () => {
  console.log("Aplicação rodando na porta 3001");
});
