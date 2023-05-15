const express = require("express");
const Cors = require("cors");

const userController = require("./src/controller/userController.js");
const feedHandler = require("./src/controller/feedController.js");

const conn = require("./src/DB/conn.js");

require("dotenv").config();
const app = express();

conn();

app.use(express.json());
app.use(Cors());

app.use("/", userController);
app.use("/", feedHandler);

const port = process.env.porta || 3232;

app.listen(port, () => console.log("SERVER OPEN PORT " + port));
