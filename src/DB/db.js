const { MongoClient } = require("mongodb");

require("dotenv").config();

const uri = `mongodb+srv://herico:${process.env.my_password}@cluster0.wh3ia4d.mongodb.net/?retryWrites=true&w=majority`;
const con = new MongoClient(uri);

module.exports = con;
