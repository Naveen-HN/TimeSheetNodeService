const vendor = require('../models/Vendor');
const uuid = require('uuid/v4')
const {
    matchedData
} = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const emailer = require('../middleware/emailer')


exports.vendors_get_all = async (req, res) => {
    try {
        const Vendors = await vendor.find()
        res.json(Vendors)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.vendor_get = async (req, res) => {
    try {
        const Vendor = await vendor.findById(req.params.vendorID);
        res.json(Vendor);
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.create_vendor = async (req, res) => {
    try {
        const {
            vendorID,
            firstName,
            lastName,
            phoneNumber,
            primaryEmail,
            secondaryEmail,
            jobCode,
            jobTitle,
            projectID,
            projectName
        } = req.body;
        const Vendor = new vendor({
            vendorID: vendorID,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            primaryEmail: primaryEmail,
            secondaryEmail: secondaryEmail,
            jobCode: jobCode,
            jobTitle: jobTitle,
            projectID: projectID,
            projectName: projectName
        })
        await Vendor.save()
        res.json(Vendor);
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.delete_vendor = async (req, res) => {
    try {
        const removedVendor = await vendor.remove({
            _id: req.params.vendorID
        })
        res.json(removedVendor)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.edit_vendor = async (req, res) => {
    try {
        const updatedVendor = await vendor.updateOne({
            _id: req.params.vendorID
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedVendor)
    } catch (err) {
        res.json({
            message: err
        })
    }
}