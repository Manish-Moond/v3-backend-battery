const mongoose = require("mongoose");

const batterySchema = mongoose.Schema({
  company: String,
  name: String,
  model: String,
  image: {
    data: Buffer,
    contentType: String,
  },
  warrenty: String,
  price: String,
  number: Number,
  off: Number
});
exports.bus = mongoose.model("bus", batterySchema);
exports.truck = mongoose.model("truck", batterySchema);
exports.car = mongoose.model("car", batterySchema);
exports.bike = mongoose.model("bike", batterySchema);
exports.rickshaw = mongoose.model("rickshaw", batterySchema);
exports.tractor = mongoose.model("tractor", batterySchema);
exports.eRickshaw = mongoose.model("erickshaw", batterySchema);
exports.hups = mongoose.model("hups", batterySchema);
exports.genset = mongoose.model("genset", batterySchema);
exports.inverter = mongoose.model("inverter", batterySchema);