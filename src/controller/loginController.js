const express = require("express");
const router = express.Router();
const LoginHandler = require("../Core/LoginHandler.js");
const handler = new LoginHandler();

router.post("/UserLogin", async (req, res) => {
  try {
    const login = await handler.UserLogin(req);
    return res.status(200).send(login);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

module.exports = router;
