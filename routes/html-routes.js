const express = require("express");
const Router = express.Router();
const middleWare = require("../middleware");

//view route
Router.get("/user-profile", middleWare.authenticateToken, (req, res) => {
  res.json({ isAuthenticated: true });
});

module.exports = Router;
