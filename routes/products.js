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

router.get("/:vehicleType", (req, res, next) => {
  console.log(req.params.vehicleType);
  if (req.params.vehicleType == "bus") {
    vehicle = bus;
  } else if (req.params.vehicleType == "truck") {
    vehicle = truck;
  } else if (req.params.vehicleType == "car") {
    vehicle = car;
  } else if (req.params.vehicleType == "bike") {
    vehicle = bike;
  } else if (req.params.vehicleType == "rickshaw") {
    vehicle = rickshaw;
  } else if (req.params.vehicleType == "tractor") {
    vehicle = tractor;
  } else if (req.params.vehicleType == "eRickshaw") {
    vehicle = eRickshaw;
  } else if (req.params.vehicleType == "hups") {
    vehicle = hups;
  } else if (req.params.vehicleType == "genset") {
    vehicle = genset;
  } else if (req.params.vehicleType == "inverter") {
    vehicle = inverter;
  }
  vehicle
    .find({
      $and: [
        { number: { $gte: Number(req.query.start) } },
        { number: { $lte: Number(req.query.end) } },
      ],
    })
    .then((data) => {
      if (!data) {
        throw createError(404, "Not Found");
      }
      res.json(data);
    })
    .catch((err) => {
      next(err)
      res.json({"message": err.message});
    });
});

module.exports = router;
