const daySheet = require('../models/DaySheet')
const uuid = require('uuid')
const {
    matchedData
} = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const emailer = require('../middleware/emailer')

exports.daySheets_get_all = async (req, res) => {
    try {
        const DaySheets = await daySheet.find();
        res.json(DaySheets)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.daySheet_get = async (req, res) => {
    try {
        const DaySheet = await daySheet.findById(req.params.daySheetID);
        res.json(DaySheet);
    } catch {
        res.json({
            message: err
        })
    }
}



exports.create_daySheet = async (req, res) => {
    try {
        const {
            daySheetID,
            billableHours,
            day,
            date,
            notes,
            timeOffHour,
            totalHours,
            workHours
        } = req.body;
        const DaySheet = new daySheet({
            daySheetID: daySheetID,
            billableHours: billableHours,
            day: day,
            date: date,
            notes: notes,
            timeOffHour: timeOffHour,
            totalHours: totalHours,
            workHours: workHours
        })
        await DaySheet.save();
        res.json(DaySheet);
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.delete_daySheet = async (req, res) => {
    try {
        const removedDaySheet = await daySheet.remove({
            _id: req.params.daySheetID
        })
        res.json(removedDaySheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.edit_daySheet = async (req, res) => {
    try {
        const updatedDaySheet = await daySheet.updateOne({
            _id: req.params.daySheetID
        }, {
            $set: {
                daySheetID: req.body.daySheetID
            }
        })
        res.json(updatedDaySheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
}