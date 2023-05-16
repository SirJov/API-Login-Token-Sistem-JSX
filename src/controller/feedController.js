const express = require("express");
const router = express.Router();
const FeedHandler = require("../Core/FeedHandler ");
const handler = new FeedHandler();
const Middlewares = require("../middlewares/Middlewares.js");

router.get("/FeedGet", Middlewares.CheckToken, async (req, res) => {
  try {
    const Feed = await handler.fetchFeed();
    return res.status(200).send(Feed);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.post("/CreateFeed", Middlewares.CheckToken, async (req, res) => {
  try {
    const newFeed = await handler.CreateFeed(req);

    return res.status(200).send(newFeed);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.put("/CreateCommentFeed", Middlewares.CheckToken, async (req, res) => {
  try {
    const commentFeed = await handler.CreateComment(req);

    return res.status(200).send(commentFeed);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.delete("/DeletePostedFeed", Middlewares.CheckToken, async (req, res) => {
  try {
    const response = await handler.DeletePostedFeed(req);

    return res.status(200).send(response);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.delete(
  "/DeleteCommentFeed",
  Middlewares.CheckToken,
  async (req, res) => {
    try {
      const response = await handler.DeleteComment(req);

      return res.status(200).send(response);
    } catch (error) {
      console.log(JSON.stringify(error));
      return res.status(404).json(JSON.stringify(error));
    }
  }
);

router.put("/LikedPostFeed", Middlewares.CheckToken, async (req, res) => {
  try {
    const response = await handler.LikedPostFeed(req);

    return res.status(200).send(response);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.put("/DesLikedPostFeed", Middlewares.CheckToken, async (req, res) => {
  try {
    const response = await handler.DesLikedPostFeed(req);

    return res.status(200).send(response);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

module.exports = router;
