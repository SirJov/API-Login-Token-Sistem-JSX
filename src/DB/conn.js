const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://herico:${process.env.my_password}@cluster0.wh3ia4d.mongodb.net/?retryWrites=true&w=majority`;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("Banco de dados conectado");
  } catch (error) {
    console.log(`Erro:${error}`);
  }
}

module.exports = main;
