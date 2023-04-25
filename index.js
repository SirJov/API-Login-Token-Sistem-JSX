const express = require("express");
const Cors = require("cors");
const loginController = require("./src/controller/loginController.js");

const conn = require("./src/DB/conn.js");

require("dotenv").config();
const app = express();

conn();

app.use(express.json());
app.use(Cors());

app.use("/login", loginController);

const port = process.env.porta || 3030;

app.listen(port, () => console.log("SERVER OPEN PORT " + port));
