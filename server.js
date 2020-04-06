const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

const apiRoutes = require('./routes/api')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use public or client build
// app.use(express.static("public"));
app.use(express.static("./client/public"));

if (process.env.NODE_ENV === "production") { //for when connected in Heroku
app.use(express.static("client/build"));
  }

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/curbside_restaurantsdb", //needs to have the same name in seed
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//functions for routes imported here, should update with routes folder
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
