const express = require("express");
const router = express.Router();
const FeedHandler = require("../Core/FeedHandler ");
const handler = new FeedHandler();
const Middlewares = require("../middlewares/Middlewares.js");

router.get("/FeedGet", async (req, res) => {
  try {
    const Feed = await handler.fetchFeed();
    return res.status(200).send(Feed);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.post("/CreateFeed", async (req, res) => {
  try {
    const newFeed = await handler.CreateFeed(req);

    return res.status(200).send(newFeed);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.put("/CreateCommentFeed", async (req, res) => {
  const commentFeed = await handler.CreateComment(req);

  return res.status(200).send(commentFeed);

  try {
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

module.exports = router;
