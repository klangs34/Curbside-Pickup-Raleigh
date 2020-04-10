const express = require("express");
const Router = express.Router();
const middleWare = require("../middleware");
const path = require("path");
const jwt = require("jsonwebtoken");

const db = require("../models");

//view route
Router.get("/user-profile", middleWare.authenticateToken, (req, res) => {
    res.render("FormUpdate");
  });

  module.exports = Router;