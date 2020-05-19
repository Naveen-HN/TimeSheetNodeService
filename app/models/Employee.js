const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')


const EmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    phone: String,
    primaryEmail: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Email is not valid'
        }
    },
    secondaryEmail: String,
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    address: String,
    jobCode: String,
    jobTitle: String,
    endClient: String,
    startDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    endDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    vendorName: String,
    projectId: String,
    projectName: String,
    managerName: String,
    approverName: String,
    createdAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    updatedAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    loginAttempts: {
        type: Number,
        default: 0,
        select: false
    },
    blockExpires: {
        type: Date,
        default: Date.now,
        select: false
    }
}, {
    versionKey: false,
    timestamps: true
})

const hash = (employee, salt, next) => {
    bcrypt.hash(employee.password, salt, (error, newHash) => {
        if (error) {
            return next(error)
        }
        employee.password = newHash
        return next()
    })
}

const genSalt = (employee, SALT_FACTOR, next) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) {
            return next(err)
        }
        return hash(employee, salt, next)
    })
}

EmployeeSchema.pre('save', function (next) {
    const that = this
    const SALT_FACTOR = 5
    if (!that.isModified('password')) {
        return next()
    }
    return genSalt(that, SALT_FACTOR, next)
})

EmployeeSchema.methods.comparePassword = function (passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
        err ? cb(err) : cb(null, isMatch)
    )
}

EmployeeSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Employee', EmployeeSchema)