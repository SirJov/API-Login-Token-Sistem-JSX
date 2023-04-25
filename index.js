const express = require("express");
const Cors = require("cors");
const loginController = require("./src/controller/loginController.js");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(Cors());

app.use("/login", loginController);

const port = process.env.porta || 3030;

app.listen(port, () => console.log("SERVER OPEN PORT " + port));
