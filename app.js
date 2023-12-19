const express = require("express");
// const ExpressError = require("./expressError");
const app = express();
const itemRoutes = require("./itemRoutes");
// const middleware = require("./middleware");
const morgan = require("morgan");

app.use(express.json());

app.use(morgan("dev"));

app.use("/items", itemRoutes);

app.get("/", (req, res) => {
  res.redirect("/items");
});

module.exports = app;
