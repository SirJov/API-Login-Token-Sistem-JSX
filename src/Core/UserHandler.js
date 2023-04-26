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

      await UserModel.create(userbody);

      return { msg: "usuario criado com sucesso" };
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

  async fetchSpecificUsers(req) {}
}

module.exports = UserHandler;
