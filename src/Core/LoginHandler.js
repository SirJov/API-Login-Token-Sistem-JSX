const { json } = require("express");
const { User: UserModel } = require("../model/UserModel");
const bcrypt = require("bcryptjs");

class LoginHandler {
  constructor() {}

  async UserLogin(req) {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      const vPass = await bcrypt.compare(req.body.password, user.password);

      if (vPass == true) {
        return { msg: "usuario logado" };
      } else {
        return { msg: "dados incorretos" };
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LoginHandler;
