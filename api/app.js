const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

if (process.env.ENV === "Test") {
  const db = mongoose.connect("mongodb://localhost/vendorAPI_test");
} else {
  const db = mongoose.connect("mongodb://localhost/vendorAPI");
}

const port = process.env.PORT || 3001;
const Vendor = require("./models/vendorModel");
const vendorRouter = require("./routes/vendorRouter")(Vendor);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", vendorRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my NODEMON API");
});

app.server = app.listen(port, () => {
  console.log("Running on port " + port);
});

module.exports = app;
