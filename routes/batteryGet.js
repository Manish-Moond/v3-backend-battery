const express = require("express");
const router = express.Router();

const {
  bus,
  truck,
  car,
  bike,
  rickshaw,
  tractor,
  eRickshaw,
  hups,
  genset,
  inverter,
} = require("../models/batterySchema");
const createError = require("http-errors");
const { NotExtended } = require("http-errors");

router.get("/:batteryByModel", (req, res, next) => {
  
  if (req.params.batteryByModel == "bus") {
    vehicle = bus;
  } else if (req.params.batteryByModel == "truck") {
    vehicle = truck;
  } else if (req.params.batteryByModel == "car") {
    vehicle = car;
  } else if (req.params.batteryByModel == "bike") {
    vehicle = bike;
  } else if (req.params.batteryByModel == "rickshaw") {
    vehicle = rickshaw;
  } else if (req.params.batteryByModel == "tractor") {
    vehicle = tractor;
  } else if (req.params.batteryByModel == "eRickshaw") {
    vehicle = eRickshaw;
  } else if (req.params.batteryByModel == "hups") {
    vehicle = hups;
  } else if (req.params.batteryByModel == "genset") {
    vehicle = genset;
  } else if (req.params.batteryByModel == "inverter") {
    vehicle = inverter;
  }

  //Geting data from database and sanding to client
  vehicle
    .find({ model: req.query.model })
    .then((data) => {
      if (!data) {
        throw createError(404, "Not Found");
      }
      res.json(data);
    })
    .catch((err) => {
      next(err);
      res.json({ message: err.message });
    });
});

module.exports = router;
