const express = require("express");
const router = express.Router();
const multer = require("multer");
const pathUploads = "./public/images/offers";

/*upload foto*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pathUploads);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jfif"
  ) {
    cb(null, true);
  } else {
    cb("Type file is not access", false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: 1024 * 1024 * 5,
});

const Offer = require("../models/offer.model");

router.get("/offers", async (req, res) => {
  try {
    const result = await Offer.find();
    if (!result) res.status(404).json({ Offer: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/offers/add", upload.array("image", 3), async (req, res) => {
  try {
    const { region, regionId, title, description, price } = req.body;

    const photosSrc = [];

    req.files.map((el) => photosSrc.push("/images/offers/" + el.filename));

    const newOffer = new Offer({
      region: region,
      regionId: regionId,
      title: title,
      description: description,
      price: price,
      image: photosSrc,
    });

    await newOffer.save();
    res.json({ newOffer });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

router.put("/offers/:id/edit", upload.array("image", 3), async (req, res) => {
  try {
    const { region, regionId, title, description, price } = req.body;

    const photosSrc = [];

    req.files.map((el) => photosSrc.push("/images/offers/" + el.filename));

    const offerToEdit = await Offer.findById(req.params.id);
    if (offerToEdit) {
      const changedOffer = await Offer.updateOne(
        { _id: req.params.id },
        {
          $set: {
            region: region,
            regionId: regionId,
            title: title,
            description: description,
            image: photosSrc,
            price: price,
          },
        }
      );
      res.json(changedOffer);
    } else res.status(404).json({ message: "Not found..." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

router.get("/offers/:id", async (req, res) => {
  try {
    const result = await Offer.findById(req.params.id);
    if (!result) res.status(404).json({ Offer: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.delete("/offers/:id", async (req, res) => {
  try {
    const result = await Offer.findById(req.params.id);
    if (result) {
      await Offer.deleteOne({ _id: req.params.id });
      res.json({ message: "ok" });
    } else res.status(404).json({ message: "Not found..." });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
