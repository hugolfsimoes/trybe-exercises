const express = require("express");
const cors = require("cors");

const teamRouter = require("./routers/teamRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/teams", teamRouter);
app.listen(3000, () => console.log("Aplicação rodando na porta 3000"));
