const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  region: { type: String, required: true },
  regionId: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  image: { type: Array },
});

module.exports = mongoose.model("Offer", offerSchema);
