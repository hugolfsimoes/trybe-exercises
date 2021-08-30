const express = require("express");
const isValidToken = require("./middlewares/validations");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/btc/price", isValidToken, async (_req, res) => {
  const result = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  ).then((res) => res.json());
  console.log(result);
  await res.status(200).json(result);
});

app.listen(3002, () => console.log("Rodando aplicação na porta 3002"));
