const mongoose = require('mongoose')

const organisationSchema = new mongoose.Schema({
    organisationName: {
        type: String,
        required: true
    },
    organisationAddress: {
        type: String
    },
    organisationNumber: {
        type: Number
    },
    organisationEmail: {
        type: String
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }],
    organisationOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    organisationMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

})

mongoose.model('Organisation', organisationSchema)