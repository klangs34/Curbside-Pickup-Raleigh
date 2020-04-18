let mongoose = require("mongoose");
let db = require("../models");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/curbside_restaurantsdb",
//   {
//     //must be the same as in the server fie
//     useNewUrlParser: true,
//     useFindAndModify: false
//   }
// );

let restaurantSeed = [
  {
    name: "Vidrio",
    contact: {
      lat: 35.7865683,
      lng: -78.64702,
      street: "500 Glenwood Ave #100",
      city: "Raleigh",
      zip: 27603,
      phone: "919-803-6033",
      web_url: "https://www.vidrioraleigh.com/vidrios-hearth-baked-pizzas/",
    },
    hours: [
      {
        days: "Daily",
        open: "04:00",
        close: "09:00",
      },
    ],
    order: "phone",
    category: "food",
  },
  {
    name: "Neuse River Brewery & Brasserie",
    contact: {
      lat: 35.8041712,
      lng: -78.6329439,
      street: "518 Pershing Rd",
      city: "Raleigh",
      zip: 27608,
      phone: "984-232-8479",
      instagram: "@neuseriverbrewingco",
    },
    hours: [
      {
        days: "W-F",
        open: "05:00",
        close: "08:30",
      },
      {
        days: "Weekends",
        open: "11:30",
        close: "08:30",
      },
    ],
    order: "phone",
    category: "food and alcohol",
  },
  {
    name: "Beach Shack Bottles & Taps",
    contact: {
      lat: 35.9111225,
      lng: -78.6816839,
      street: "6300 Creedmoor Road #130",
      city: "Raleigh",
      zip: 27615,
      phone: "919-307-1964",
      instagram: "@beachshackbottlestaps",
      web_url: "http://www.beachshackbottlesandtaps.com/",
      online: "beachshackbottlesandtaps.square.site",
    },
    hours: [
      {
        days: "Daily",
        open: "12:00",
        close: "07:00",
      },
    ],
    order: "online",
    category: "alcohol",
  },
  {
    name: "Crawford and Son",
    contact: {
      lat: 35.788879,
      lng: -78.634087,
      street: "618 N Person St",
      city: "Raleigh",
      zip: 27604,
      phone: "919-307-4647",
      instagram: "@crawfordnson",
      web_url: "http://www.crawfordandsonrestaurant.com/",
      menu_url:
        "http://www.crawfordandsonrestaurant.com/wp-content/uploads/2020/04/Curbside-Menu-7.pdf",
    },
    hours: [
      {
        days: "Tues-Sat",
        open: "02:00",
        close: "08:00",
      },
    ],
    order: "phone",
    category: "food and alcohol",
  },
  {
    name: "Jose and Sons",
    contact: {
      lat: 35.775323,
      lng: -78.6447053,
      street: "327 W Davie St #102",
      city: "Raleigh",
      zip: 27601,
      phone: "919-775-0556",
      instagram: "@joseandsons",
      web_url: "https://www.joseandsons.com/",
      online: "https://www.joseandsons.com/online-ordering/jose-and-sons/menu",
    },
    hours: [
      {
        days: "T-F",
        open: "03:00",
        close: "08:30",
      },
      {
        days: "Sat",
        open: "12:00",
        close: "08:30",
      },
      {
        days: "Sum",
        open: "12:00",
        close: "08:00",
      },
    ],
    order: "online",
    category: "food and alcohol",
  },
  {
    name: "The Pit",
    contact: {
      lat: 35.7760104,
      lng: -78.6447112,
      street: "328 W Davie St",
      city: "Raleigh",
      zip: 27601,
      phone: "919-890-4500",
      web_url: "https://www.thepit-raleigh.com/",
      online: "https://www.thepit-raleigh.com/order-online/",
      menu_url: "https://www.thepit-raleigh.com/order-online/",
    },
    hours: [
      {
        days: "Daily",
        open: "11:00",
        close: "08:00",
      },
    ],
    order: "phone or online",
    category: "food and alcohol",
  },
  {
    name: "Waraji",
    contact: {
      lat: 35.8585483,
      lng: -78.7117476,
      street: "5910 Duraleigh Road",
      city: "Raleigh",
      zip: 27612,
      phone: "919-783-1883",
      instagram: "@warajisushi",
      web_url: "https://www.warajijapaneserestaurant.com/",
    },
    hours: [
      {
        days: "",
        open: "02:00",
        close: "08:00",
      },
    ],
    order: "phone",
    category: "food and alcohol",
  },
  {
    name: "Randy's Pizza",
    contact: {
      lat: 35.8805956,
      lng: -78.84945619999999,
      street: "5311 S Miami Blvd",
      city: "Durham",
      zip: 27703,
      phone: "919-941-7755",
      instagram: "@trianglerandyspizza",
      web_url: "http://randys-pizza.com/",
      online: "https://orderonline.granburyrs.com/slice/menu/main",
    },
    hours: [
      {
        days: "M-Sat",
        open: "11:00",
        close: "07:45",
      },
      {
        days: "Sun",
        open: "12:00",
        close: "07645",
      },
    ],
    order: "online",
    category: "food",
  },
  {
    name: "Salsa Fresh",
    contact: {
      lat: 35.90437319999999,
      lng: -78.65626499999999,
      street: "9650 Strickland Rd",
      city: "Raleigh",
      zip: 27615,
      phone: "919-870-1107",
      web_url: "http://www.salsafreshgrill.com/",
      online:
        "https://www.doordash.com/store/salsa-fresh-mexican-grill-raleigh-208499/en-US?utm_campaign=208499&utm_content=red-small&utm_medium=website&utm_source=partner-link",
      menu_url: "http://www.salsafreshgrill.com/salsa-fresh-mexican-grill-menu",
    },
    hours: [
      {
        days: "Daily",
        open: "11:00",
        close: "08:03",
      },
    ],
    order: "online",
    category: "food and alcohol",
  },
];

db.Restaurants.deleteMany({})
  .then(() => db.Restaurants.collection.insertMany(restaurantSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
