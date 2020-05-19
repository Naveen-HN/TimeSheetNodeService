const project = require('../models/Projects')
const uuid = require('uuid')
const {
    matchedData
} = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const emailer = require('../middleware/emailer')

exports.projects_get_all = async (req, res) => {
    try {
        const Projects = await project.find();
        res.json(Projects)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.project_get = async (req, res) => {
    try {
        const Project = await project.findById(req.params.projectID);
        res.json(Project);
    } catch {
        res.json({
            message: err
        })
    }
}



exports.create_project = async (req, res) => {
    try {
        const {
            projectID,
            clientProjectId,
            clientProjectName,
            startDate,
            endDate,
            notes,
            clientId,
            clientName,
            vendorId,
            vendorName,
            listOfEmployees,
            isActiveTimeSheet,
            activeTimeSheetStartDate,
            activeTimeSheetEndDate,
            activeTimeSheetFreezeDate,
            createdById,
            createdAt,
            updatedAt
        } = req.body;
        const Project = new project({
            projectID: projectID,
            clientProjectId: clientProjectId,
            clientProjectName: clientProjectName,
            startDate: startDate,
            endDate: endDate,
            notes: notes,
            clientId: clientId,
            clientName: clientName,
            vendorId: vendorId,
            vendorName: vendorName,
            listOfEmployees: listOfEmployees,
            isActiveTimeSheet: isActiveTimeSheet,
            activeTimeSheetStartDate: activeTimeSheetStartDate,
            activeTimeSheetEndDate: activeTimeSheetEndDate,
            activeTimeSheetFreezeDate: activeTimeSheetFreezeDate,
            createdById: createdById,
            createdAt: createdAt,
            updatedAt: updatedAt
        })
        await Project.save();
        res.json(Project);
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.delete_project = async (req, res) => {
    try {
        const removedProject = await project.remove({
            _id: req.params.projectID
        })
        res.json(removedProject)
    } catch (err) {
        res.json({
            message: err
        })
    }
}

exports.edit_project = async (req, res) => {
    try {
        const updatedProject = await project.updateOne({
            _id: req.params.projectID
        }, {
            $set: {
                clientProjectName: req.body.clientProjectName
            }
        })
        res.json(updatedProject)
    } catch (err) {
        res.json({
            message: err
        })
    }
}