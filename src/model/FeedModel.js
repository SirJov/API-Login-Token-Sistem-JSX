const mongoose = require("mongoose");

const { Schema } = mongoose;

const feedSchema = new Schema(
  {
    _idAuthor: {
      type: String,
      required: true,
    },
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
        _idAuthorComment: String,

        userAuthorComment: String,

        imgAuthorComment: String,

        bodyComment: String,
      },
    ],
  },
  { timestamps: false }
);

const Feed = mongoose.model("Feed", feedSchema);

module.exports = { Feed, feedSchema };
