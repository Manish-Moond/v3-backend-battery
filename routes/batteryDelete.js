const express = require("express");
const router = express.Router();
var ObjectId = require("mongodb").ObjectID;


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
const { isValidObjectId } = require("mongoose");

router.get("/:vehicleType", (req, res, next) => {

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

  // Deleting data from database
    vehicle
        .deleteOne({model: req.query.model})
      .then((data) => res.send("Deleted"))
      .catch((err) => {
        res.send(err);
      });
    
});

module.exports = router;
