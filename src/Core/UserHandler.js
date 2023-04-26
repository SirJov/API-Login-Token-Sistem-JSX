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
        return { msg: "usuario ja existe!!" };
      } else {
        await UserModel.create(userbody);

        return { msg: "usuario criado com sucesso" };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(req) {}

  async deleteUser(req) {}

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
      const user = await UserModel.findOne({ email: req });
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
