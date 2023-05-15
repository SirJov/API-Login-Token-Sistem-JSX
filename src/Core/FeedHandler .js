const { Feed: FeedModel } = require("../model/FeedModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class FeedHandler {
  constructor() {}

  async fetchFeed() {
    try {
      const Feed = await FeedModel.find();

      return Feed;
    } catch (error) {
      return console.log(error);
    }
  }
}

module.exports = FeedHandler;
