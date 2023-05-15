const { Feed: FeedModel } = require("../model/FeedModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class FeedHandler {
  constructor() {}

  async fetchFeed() {
    try {
      const Feedb = await FeedModel.find();
      return Feedb;
    } catch (error) {
      return console.log(error + " AAAAAAAA");
    }
  }

  async CreateFeed(req) {
    try {
      const Feed = await FeedModel.create(req.body);

      return { msg: "Nova postagem criada com sucesso", obj: Feed };
    } catch (error) {
      return console.log(error);
    }
  }
}

module.exports = FeedHandler;
