const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

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

//creating storage obj for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname.substring(0, __dirname.length - 6) + "//uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/:vehicleType", upload.single("image"), (req, res) => {
  
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

  // save data in database
  let obj = new vehicle({
    company: req.body.brandName,
    name: req.body.name,
    model: req.body.modelNumber,
    image: {
      data: Buffer.from(
        fs.readFileSync(
          path.join(
            __dirname.substring(0, __dirname.length - 6) +
              "//uploads/" +
              req.file.originalname
          )
        ),
        "base64"
      ),
      contentType: req.file.mimetype,
    },
    warrenty: req.body.warrenty,
    price: req.body.price,
  });
  obj.save();

  //deleting the file from upload folder
  fs.unlink(
    __dirname.substring(0, __dirname.length - 6) +
      "//uploads/" +
      req.file.originalname,
    (err) => {
      if (err) {
        throw err;
      }
      console.log("File is deleted");
    }
  );

  // reponding to client
  res.json({
    company: req.body.brandName,
    name: req.body.name,
    model: req.body.model,
    warrenty: req.body.warrenty,
    price: req.body.price,
    vehicleType: req.params.vehicleType,
  });
});

module.exports = router;
