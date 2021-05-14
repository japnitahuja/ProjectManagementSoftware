const mongoose = require('mongoose')
const validator = require('validator')
const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:[true, 'Please enter project name']
    },
    projectStatus:{
        type: String,
        enum:['ACTIVE', 'PLANNED', 'COMPLETED'],
    },
    projectOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    projectType: {
        type: String
    },
    propertyType:{
        type: String
    },
    projectLocation:{
        type: String
    },
    projectBudget:{
        type: Number
    },
    projectFinishDate:{
        type: Date
    },
    tasks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }],
    projectRoles: [],
    purchaseOrders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "purchaseOrder"
    }],
    totalTasks:{
        type: Number,
        default: 0
    },
    published:{
        type: Boolean,
        default: true
    },
    completedTasks:{
        type: Number,
        default: 0
    },
    changeOrders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'changeOrder'
    }],
    punchList:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'punchList'
    }],
    Users:[{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
        },
        role: {
            type: String
        },
        permission: {
            type: String
        }
    }]
})
mongoose.model('Project', projectSchema)