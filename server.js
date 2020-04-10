const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const middleWare = require("./middleware");

const PORT = process.env.PORT || 8080;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/curbside_restaurantsdb", //needs to have the same name in seed
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(logger("dev"));

const apiRoutes = require("./routes/api");

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
app.use("/api", apiRoutes);

app.use(function (req, res, next) {
  //res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

// error handler middleware
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    error:
    {
      message: err.message || "Oops!  Something went wrong!"
    }
  });
  //res.render(err.message);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
