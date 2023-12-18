const express = require("express");
const ExpressError = require("./expressError");
const app = express();
const userRoutes = require("./routes");
const middleware = require("./middleware");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
