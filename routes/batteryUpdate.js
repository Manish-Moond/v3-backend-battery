const express = require("express");
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

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

router.post("/:vehicleType", (req, res) => {
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
  // updating in data by id
  vehicle.updateOne(
    {'_id':ObjectId(req.body.id)},
    {
      $set: {
        warrenty: req.body.warrenty,
        price:req.body.price,
    }},
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
});

module.exports = router;
