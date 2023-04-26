const express = require("express");
const router = express.Router();
const UserHandler = require("../Core/UserHandler");
const handler = new UserHandler();

router.post("/userRegister", async (req, res) => {
  try {
    const user = await handler.registerUser(req);
    if (user) return res.status(201).send(user);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const user = await handler.fetchUsers();
    if (user) return res.status(200).send(user);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

module.exports = router;
