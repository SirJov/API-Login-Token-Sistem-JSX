const express = require("express");
const router = express.Router();
const FeedHandler = require("../Core/FeedHandler ");
const handler = new FeedHandler();
const Middlewares = require("../middlewares/Middlewares.js");

router.get("/NewFeedPost", Middlewares.CheckToken, async (req, res) => {
  try {
    const Feed = await handler.fetchFeed(req);
    return res.status(200).send(Feed);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

module.exports = router;
