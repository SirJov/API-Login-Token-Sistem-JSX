import mongoose from "mongoose";

const { Schema } = mongoose;

const FeedSchema = new Schema({
  userAuthor: {
    type: String,
    required: true,
  },
  imgAuthor: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  likesNumber: {
    type: Number,
    required: true,
  },

  comments: [
    {
      userAuthorComment: String,

      imgAuthorComment: String,

      bodyComment: String,
    },
  ],
});

const Feed = mongoose.model("Feed", FeedSchema);

module.exports = { Feed, FeedSchema };
