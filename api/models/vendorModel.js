const mongoose = require("mongoose");

const { Schema } = mongoose;

const vendorModel = new Schema({
  name: { type: String },
  category: { _id: { type: String }, name: { type: String } },
  address: { latitude: { type: Number }, longhitude: { type: Number } },
  discountRate: { type: Number },
  image: { type: String }
});

module.exports = mongoose.model("Vendor", vendorModel);
