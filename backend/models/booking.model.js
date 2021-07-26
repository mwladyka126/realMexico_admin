const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  offers: { type: Array, required: true },
  created: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
});

module.exports = mongoose.model("Booking", bookingSchema);
