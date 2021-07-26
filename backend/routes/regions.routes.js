const express = require("express");
const router = express.Router();

const Region = require("../models/region.model");

router.get("/regions", async (req, res) => {
  try {
    const result = await Region.find();
    if (!result) res.status(404).json({ Region: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/regions", async (req, res) => {
  try {
    const { name, regionId, image } = req.body;
    const newRegion = new Region({
      name,
      regionId,
      image,
    });
    await newRegion.save();
    res.json({ newRegion });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/regions/:id", async (req, res) => {
  try {
    const result = await Region.findById(req.params.id);
    if (!result) res.status(404).json({ Region: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
