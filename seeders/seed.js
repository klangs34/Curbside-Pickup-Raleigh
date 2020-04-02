let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/curbside_restaurantsdb", { //must be the same as in the server file
  //put the MLAB URL here to
  useNewUrlParser: true,
  useFindAndModify: false
});

let restaurantSeed = [
  {
    name: "Vidrio",
    address: [
      {
        street: "500 Glenwood Ave #100",
        city: "Raleigh",
        zip: 27603,
        phone: "919-803-6033"
      }
    ],
    hours: [
      {
        days: "Daily",
        open: 4,
        close: 9
      }
    ],
    menu: [
      {
        web_url: "https://www.vidrioraleigh.com/vidrios-hearth-baked-pizzas/"
      }
    ],
    category: "food"
  },
  {
    name: "Neuse River Brewery & Brasserie",
    address: [
      {
        street: "518 Pershing Rd",
        city: "Raleigh",
        zip: 27608,
        phone: "984-232-8479"
      }
    ],
    hours: [
      {
        days: "W, R, F: 5-8:30, S, S: 11:30-8:30",
        open: 5,
        close: 8.5 //8:30
      }
    ],
    menu: [
      {
        instagram: "@neuseriverbrewingco"
      }
    ],
    category: "food and alcohol"
  }
];

db.Restaurants.deleteMany({})
  .then(() => db.Restaurants.collection.insertMany(restaurantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
