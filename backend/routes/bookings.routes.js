const express = require("express");
const router = express.Router();

const Booking = require("../models/booking.model");

function escape(html) {
  return html
    .replace(/&/g, "")
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/"/g, "")
    .replace(/'/g, "");
}

router.get("/bookings", async (req, res) => {
  try {
    const result = await Booking.find()
      .select(
        " lastName email created offers.title offers.people offers.days offers.totalPrice offers.message"
      )
      .sort({ created: -1 });
    if (!result) res.status(404).json({ booking: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/bookings", async (req, res) => {
  try {
    const { offers, created, firstName, lastName, email, phone } = req.body;
    const emailPattern = new RegExp(
      "^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9_.-]+.{1,3}[a-zA-Z]{2,4}"
    );
    const validatedEmail = emailPattern.test(email);
    if (!validatedEmail) throw new Error("Wrong email!");
    const phonePattern = new RegExp("[0-9]{6,13}");
    const validatedPhone = phonePattern.test(phone);
    if (!validatedPhone) throw new Error("Wrong email!");

    if (firstName.length < 3 || lastName.length < 3)
      throw new Error("Your name is to short");

    if (validatedEmail && validatedPhone && firstName && lastName) {
      const newBooking = new Booking({
        offers,
        created,
        firstName: escape(firstName),
        lastName: escape(lastName),
        email: validatedEmail,
        phone: validatedPhone,
      });
      await newBooking.save();
      res.json({ newBooking });
    } else {
      throw new Error("Wrong input!");
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/bookings/:id", async (req, res) => {
  try {
    const result = await Booking.findById(req.params.id);
    if (!result) res.status(404).json({ booking: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
