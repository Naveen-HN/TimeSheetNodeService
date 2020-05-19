const mongoose = require('mongoose')


const VendorSchema = new mongoose.Schema({
    vendorID: Number,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    primaryEmail: String,
    secondaryEmail: String,
    jobCode: String,
    jobTitle: String,
    projectID: String,
    projectName: String
})

module.exports = mongoose.model('vendor', VendorSchema)