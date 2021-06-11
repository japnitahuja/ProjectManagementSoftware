const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    permission:{
        type: String,
    },
    phoneNumber:{
        type:Number,
        minlength: 10,
        maxlength: 10,
    },
    username:{
        type:String,
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password:{
        type:String,
    },
    login: {
        type: Boolean,
        default: true   
    },
    isInvitationSent:{
        type: Boolean,
        default: true
    },
    // models for organisation --->
    // projects: [{
    //     organisation: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Organisation"
    //     },
    //     organisationProjects: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Project"
    //     }]
    // }],
    // ---------->
    //comment this for organisation
    projects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }],
    // ------------->
    createdAt: {type: Date, default: Date.now}
})
mongoose.model('User', userSchema)
