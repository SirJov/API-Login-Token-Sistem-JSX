const { User: UserModel } = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(email) {
  return jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
    expiresIn: 1300,
  });
}

class UserHandler {
  constructor() {}

  async UserLogin(req) {
    try {
      const user = await UserModel.findOne({ email: req.body.email });

      const dataUser = {
        id: user._id,
        user: user.user,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };

      if (user.email == null) {
        return { msg: "Dados incorretos!!" };
      }

      const verifyPassword = await bcrypt.compare(
        req.body.password,
        user.passwordCryptografed
      );

      if (verifyPassword == true) {
        const token = generateAccessToken(req.body.email);

        return [{ msg: "usuario logado!", token: token }, dataUser];
      } else {
        return { msg: "dados incorretos!" };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async registerUser(req) {
    try {
      const password = await bcrypt.hash(req.body.password, 9);
      const token = generateAccessToken(req.body.email);
      const userbody = {
        user: req.body.user,
        email: req.body.email,
        passwordCryptografed: password,
      };

      const user = await UserModel.findOne({ email: req.body.email });

      if (user) {
        return { msg: "Usuario ja existe!!" };
      } else {
        await UserModel.create(userbody);
        const userData = await UserModel.findOne({ email: req.body.email });

        const dataUser = {
          id: userData._id,
          user: userData.user,
          email: userData.email,
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt,
        };

        return [{ msg: "Usuario criado com sucesso", token: token }, dataUser];
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(req) {}

  async deleteUser(req) {
    try {
      const user = await UserModel.deleteOne({ email: req.params.email });
      if (user.deletedCount == 1) {
        return { msg: "Usuario deletado com sucesso!" };
      }
      if (user.deletedCount == 0) {
        return { msg: "Usuario nao encontrado!" };
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUsers() {
    try {
      const users = await UserModel.find();

      return users;
    } catch (error) {
      return console.log(error);
    }
  }

  async fetchSpecificUsers(req) {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) {
        const dataUser = {
          id: user._id,
          user: user.user,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
        console.log(dataUser);
        return;
      } else {
        return { msg: "nenhum usuario encontrado!!" };
      }
    } catch (error) {
      return console.log(error);
    }
  }
}

module.exports = UserHandler;
