const mongoose = require('mongoose')


const ProjectsSchema = new mongoose.Schema({
    projectId: Number,
    clientProjectId: Number,
    clientProjectName: String,
    startDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    endDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    notes: String,
    clientId: Number,
    clientName: String,
    vendorId: Number,
    vendorName: String,
    listOfEmployees: Array,
    isActiveTimeSheet: Boolean,
    activeTimeSheetStartDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    activeTimeSheetEndDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    activeTimeSheetFreezeDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    createdById: Number,
    createdAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    updatedAt: {
        type: Number,
        default: (new Date()).getTime()
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Projects', ProjectsSchema)