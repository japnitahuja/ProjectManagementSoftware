const mongoose = require('mongoose')
const validator = require('validator')
const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:[true, 'Please enter project name']
    },
    projectStatus:{
        enum:['ACTIVE', 'PLANNED', 'COMPLETED'],
    },
    projectOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tasks:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
    }]
})
mongoose.model('Project', projectSchema)