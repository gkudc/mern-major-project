const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // <-- This must be String
  price: Number,
  location: String,
  country: String,
});

module.exports = mongoose.model("Listing", listingSchema);