const counter = require('../models/Counter')
const uuid = require('uuid')
const {
    matchedData
} = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const emailer = require('../middleware/emailer')

exports.counters_get_all = async (req, res) => {
    try {
        const Counters = await counter.find();
        res.json(Counters)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.counter_get = async (req, res) => {
    try {
        const Counter = await counter.findById(req.params._id);
        res.json(Counter);
    } catch {
        res.json({
            message: err
        })
    }
}



exports.create_counter = async (req, res) => {
    try {
        const {
            _id,
            seq
        } = req.body;
        const Counter = new counter({
            _id: _id,
            seq: seq
        })
        await Counter.save();
        res.json(Counter);
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.delete_counter = async (req, res) => {
    try {
        const removedCounter = await counter.remove({
            _id: req.params._id
        })
        res.json(removedCounter)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.edit_counter = async (req, res) => {
    try {
        const updatedCounter = await counter.updateOne({
            _id: req.params._id
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedCounter)
    } catch (err) {
        res.json({
            message: err
        })
    }
}