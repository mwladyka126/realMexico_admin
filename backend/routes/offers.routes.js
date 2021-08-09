const express = require("express");
const router = express.Router();

const Offer = require("../models/offer.model");

router.get("/offers", async (req, res) => {
  try {
    const result = await Offer.find();
    if (!result) res.status(404).json({ Offer: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/offers/add", async (req, res) => {
  try {
    const { region, regionId, title, description, price, image } = req.body;
    console.log(req.body);
    const newOffer = new Offer({
      region: region,
      regionId: regionId,
      title: title,
      description: description,
      price: price,
      image: image,
    });
    await newOffer.save();
    res.json({ newOffer });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

router.get("/offers/:id", async (req, res) => {
  try {
    const result = await Offer.findById(req.params.id);
    if (!result) res.status(404).json({ offer: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
