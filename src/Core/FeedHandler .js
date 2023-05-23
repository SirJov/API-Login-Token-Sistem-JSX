const { Feed: FeedModel } = require("../model/FeedModel");
require("dotenv").config();

class FeedHandler {
  constructor() {}

  async fetchFeed() {
    try {
      const Feedb = await FeedModel.find();
      return [{ msg: "Get sucesso" }, { obj: Feedb }];
    } catch (error) {
      return console.log(error);
    }
  }

  async CreateFeed(req) {
    try {
      await FeedModel.create(req.body);
      const Feedb = await FeedModel.find();

      return [{ msg: "Nova postagem criada com sucesso" }, { obj: Feedb }];
    } catch (error) {
      return console.log(error);
    }
  }

  async CreateComment(req) {
    try {
      const data = {
        _idAuthorComment: req.body._idAuthorComment,

        userAuthorComment: req.body.userAuthorComment,

        imgAuthorComment: req.body.imgAuthorComment,

        bodyComment: req.body.bodyComment,
      };

      await FeedModel.updateOne(
        { _id: req.body._id },
        { $push: { comments: [data] } }
      );
      const Feedb = await FeedModel.find();

      return [{ msg: "Novo comentario criado com sucesso" }, { obj: Feedb }];
    } catch (error) {
      return console.log(error);
    }
  }

  async DeletePostedFeed(req) {
    try {
      await FeedModel.deleteOne({ _id: req.body._id });
      const Feedb = await FeedModel.find();

      return [{ msg: "Post deletado com sucesso" }, { obj: Feedb }];
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteComment(req) {
    try {
      await FeedModel.findOneAndUpdate(
        { _id: req.body._idPost },
        { $pull: { comments: { _id: req.body._idComment } } }
      );

      const Feedb = await FeedModel.find();

      return [{ msg: "Comentario deletado com sucesso" }, { obj: Feedb }];
    } catch (error) {
      console.log(error);
    }
  }

  async LikedPostFeed(req) {
    try {
      await FeedModel.findByIdAndUpdate(
        { _id: req.body._idPost },
        { $push: { likesNumber: req.body._idAuthorLikedt } }
      );
      const Feedb = await FeedModel.find();

      return [{ msg: "Liked!!!" }, { obj: Feedb }];
    } catch (error) {
      console.log(error);
    }
  }

  async DesLikedPostFeed(req) {
    try {
      await FeedModel.findByIdAndUpdate(
        { _id: req.body._idPost },
        { $pull: { likesNumber: req.body._idAuthorLikedt } }
      );
      const Feedb = await FeedModel.find();

      return [{ msg: "Deslike!!!" }, { obj: Feedb }];
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FeedHandler;
