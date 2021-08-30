const { json } = require("express");
const express = require("express");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());
const cors = require("cors");

app.use(cors());

app.use("/user", userRouter);

app.listen(3001, () => {
  console.log("Aplicação rodando na porta 3001");
});
