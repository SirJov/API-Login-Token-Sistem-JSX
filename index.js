const express = require("express");
const Cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(Cors());

module.exports = app;

const port = process.env.porta || 3030;

app.listen(port, () => console.log("SERVER OPEN PORT " + port));
