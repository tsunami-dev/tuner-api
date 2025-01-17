// app.js
// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songsController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Tuner App");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;