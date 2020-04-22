const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
  name: {
    type: String,
    unique: true,
  },
  contact: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
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
    instagram: {
      type: String,
    },
    web_url: {
      type: String,
    },
    online: {
      type: String,
    },
    menu_url: {
      type: String,
    },
  },
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
    {
      days: {
        type: String,
      },
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    {
      days: {
        type: String,
      },
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    }
  ],
  order: { type: String },
  category: { type: String }
  //how to make a choice: food, alcohol, food and alcohol - limited by dropdown on the front end, maybe a way to control with a "list" on backend?
});

//define data types more clearly - like for answers in fitness app?

const Restaurants = mongoose.model("Restaurants", RestaurantSchema);

module.exports = Restaurants;
