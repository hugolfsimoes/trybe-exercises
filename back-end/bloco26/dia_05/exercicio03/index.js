const express = require("express");
const cors = require("cors");

const postRouter = require("./routers/postRouter");
const errors = require("./middlewares/routerNotFound");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/posts", postRouter);

app.use("*", (_req, _res, next) =>
  next({ statusCode: 404, message: "Opsss router not found" })
);
app.use(errors);

app.listen(3001, () => console.log("Aplicação rodando na porta 3001"));
