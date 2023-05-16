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

  async CreateComment(req) {
    try {
      const data = {
        userAuthorComment: req.body.userAuthorComment,

        imgAuthorComment: req.body.imgAuthorComment,

        bodyComment: req.body.bodyComment,
      };

      const CommentCreated = await FeedModel.updateOne(
        { _id: req.body._id },
        { $push: { comments: [data] } }
      );

      return CommentCreated;
    } catch (error) {
      return console.log(error);
    }
  }

  async DeletePostedFeed(req) {
    try {
      const response = await FeedModel.deleteOne({ _id: req.body._id });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteComment(req) {
    try {
      const response = await FeedModel.findOneAndUpdate(
        { _id: req.body._idPost },
        { $pull: { comments: { _id: req.body._idComment } } }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async LikedPostFeed(req) {
    try {
      const data = await FeedModel.findById({ _id: req.body._idPost });
      await FeedModel.findByIdAndUpdate(
        { _id: req.body._idPost },
        { likesNumber: data.likesNumber + 1 }
      );

      return { msg: "Add Like " };
    } catch (error) {
      console.log(error);
    }
  }
  async DesLikedPostFeed(req) {
    try {
      const data = await FeedModel.findById({ _id: req.body._idPost });
      await FeedModel.findByIdAndUpdate(
        { _id: req.body._idPost },
        { likesNumber: data.likesNumber - 1 }
      );

      return { msg: "Remove Like " };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FeedHandler;
