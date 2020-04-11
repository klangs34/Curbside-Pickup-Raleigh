const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  address: [
    {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      zip: {
        //need this?
        type: Number,
      },
      phone: {
        type: String,
      },
    },
  ],
  hours: [
    {
      //default to daily hours, add option in window that says select aditional days and will populate in an empty string to modify for Sat, Sun, etc
      days: {
        type: String,
        //option to put in a checkbox? like M-F, S, S, etc?
      },
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
  ],
  menu: [
    {
      web_url: { type: String },
      instagram: { type: String },
      facebook: { type: String },
    },
  ],
  category: { type: String },
  //how to make a choice: food, alcohol, food and alcohol
});

//define data types more clearly - like for answers in fitness app?

const Restaurants = mongoose.model("Restaurants", RestaurantSchema);

module.exports = Restaurants;
