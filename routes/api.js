require("dotenv").config();
const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");
const middleWare = require("../middleware");
const path = require("path");

const db = require("../models");

Router.get("/get-restaurants", (req, res) => {
  db.Restaurants.find({}).then((data) => {
    console.log(data);
    res.json(data);
  });
});

Router.get("/get-restaurant/:id", (req, res) => {
  const { id } = req.params;

  db.Restaurants.findOne({ id }).then((data) => {
    console.log(data);
    res.json(data);
  });
});

Router.post("/login", (req, res) => {
    //add database logic
  //Authenticate User
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.SECRECT);
  res.json({ accessToken });
});

//view route
Router.get("/user-profile", middleWare.authenticateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/profile.html"));
});

module.exports = Router;
