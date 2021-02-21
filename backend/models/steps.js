const mongoose = require('mongoose')
const stepSchema = new mongoose.Schema({
    stepName:{
        type: String,
        required: [true, 'Please enter a name for the step']
    },
    isStepDone:{
        type: Boolean,
        default: false
    }
})
mongoose.model('Step', stepSchema)