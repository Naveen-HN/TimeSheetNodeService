const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  vendorID: Number,
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  primaryEmail: String,
  secondaryEmail: String,
  managerName: String,
  approverName: String,
});

module.exports = mongoose.model("vendor", VendorSchema);
