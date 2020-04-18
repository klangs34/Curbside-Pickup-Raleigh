const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/curbside_restaurantsdb", //needs to have the same name in 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(cors());
app.use(logger("dev"));

const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html-routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use public or client build
// app.use(express.static("public"));
app.use(express.static("./client/public"));

if (process.env.NODE_ENV === "production") {
  //for when connected in Heroku
  app.use(express.static("client/build"));
}

//functions for routes imported here, should update with routes folder
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  error.status = 404;
  next(err);
  //next(createError(404));
});

// error handler middleware
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error message
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Oops!  Something went wrong!",
    },
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
