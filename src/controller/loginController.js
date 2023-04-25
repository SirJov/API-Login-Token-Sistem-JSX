const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

module.exports = router;
