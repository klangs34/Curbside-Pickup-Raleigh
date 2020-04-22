require("dotenv").config();
const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");

const db = require("../models");

Router.get("/get-restaurants", (req, res) => {
  db.Restaurants.find({}).then((data) => {
    console.log("get");
    res.json(data);
  });
});
Router.post("/restaurant/:id", (req, res) => {
  db.Restaurants.insertMany(req.body).then((data) => {
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

Router.post("/login", async (req, res, next) => {
  //add database logic
  try {
    let user = await db.Users.findOne({
      email: req.body.email,
    });
    let { _id, email } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          _id,
          email,
        },
        process.env.SECRET
      );
      return res.status(200).json({
        _id,
        email,
        token,
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password!",
      });
    }
  } catch (error) {
    return next({
      status: 400,
      message: "Invalid Email/Password",
    });
  }
});

Router.post("/createaccount", async (req, res, next) => {
  //add database logic
  try {
    let user = await db.Users.create(req.body);
    let { _id, email } = user;
    let token = jwt.sign(
      {
        _id,
        email,
      },
      process.env.SECRET
    );
    return res.status(200).json({
      _id,
      email,
      token,
    });
  } catch (error) {
    //if a validation fails!
    if (error.code === 11000) {
      error.message = "Sorry, that email is already registered";
    }
    return next({
      status: 400,
      message: error.message,
    });
  }
});

module.exports = Router;
