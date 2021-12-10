const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const errorMiddleware = require("./Middlewares/errors");

// Setting up config file path
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").dotenv.config({ path: "server/config/config.env" });

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing routes

const dataRoute = require("./Routes/Dataroute/dataRoute");
const cityRoute = require("./Routes/CityRoute/cityRoute");
const mealRoute = require("./Routes/Mealroute/mealRoute");
const cuisineRoute = require("./Routes/Cuisineroute/cuisineRoute");
const starterRoute = require("./Routes/Starterroute/starterRoute");

// Route Middleware

app.use("/api/v1", dataRoute);
app.use("/api/v1", cityRoute);
app.use("/api/v1", mealRoute);
app.use("/api/v1", cuisineRoute);
app.use("/api/v1", starterRoute);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
