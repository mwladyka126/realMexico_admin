const express = require("express");
const router = express.Router();

const offer = require("../models/offer.model");

router.get("/offers", async (req, res) => {
  try {
    const result = await offer.find();
    if (!result) res.status(404).json({ offer: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/offers", async (req, res) => {
  try {
    const { region, regionId, title, description, price, image } = req.body;
    const newoffer = new offer({
      region: region,
      regionId: regionId,
      title: title,
      description: description,
      price: price,
      image: image,
    });
    await newoffer.save();
    res.json({ newoffer });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

router.get("/offers/:id", async (req, res) => {
  try {
    const result = await offer.findById(req.params.id);
    if (!result) res.status(404).json({ offer: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
