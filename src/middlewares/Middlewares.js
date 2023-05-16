const jwt = require("jsonwebtoken");
require("dotenv").config();

function CheckToken(req, res, next) {
  const reqHeader = req.headers["authorization"];
  console.log(reqHeader);
  const token = reqHeader && reqHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ msg: "acesso negado!!" });
  }
  try {
    const secret = process.env.TOKEN_SECRET;

    jwt.verify(token, secret); //valida o token do usuario, caso de erro ja pula pro catch
    next();
  } catch (error) {
    return res.status(400).send(error);
  }
}

module.exports = { CheckToken };
