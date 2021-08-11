const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const offersRoutes = require("./routes/offers.routes");
const regionsRoutes = require("./routes/regions.routes");
const bookingsRoutes = require("./routes/bookings.routes");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use("/api", offersRoutes);
app.use("/api", regionsRoutes);
app.use("/api", bookingsRoutes);

/* API ERROR PAGES */
app.use("/api", (req, res) => {
  res.status(404).send({ page: "Not found..." });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, "../build")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.use(function (err, req, res, next) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});

/* MONGOOSE */
mongoose.connect(
  `mongodb+srv://${process.env.mongoApp}:${process.env.mongoPass}@cluster0.w1mbx.mongodb.net/REALMexico?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to the database");
});
db.on("error", (err) => console.log("Error: " + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
