const { User: UserModel } = require("../model/UserModel");

class UserHandler {
  constructor() {}

  async registerUser(req) {
    try {
      const userbody = {
        user: req.body.user,
        email: req.body.email,
        password: req.body.password,
      };

      const user = await UserModel.findOne({ email: req.body.email });

      if (user) {
        return { msg: "Usuario ja existe!!" };
      } else {
        await UserModel.create(userbody);

        return { msg: "Usuario criado com sucesso" };
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
      const user = await UserModel.findOne({ email: req.params.email });
      if (user) {
        return user;
      } else {
        return { msg: "nenhum usuario encontrado!!" };
      }
    } catch (error) {
      return console.log(error);
    }
  }
}

module.exports = UserHandler;
