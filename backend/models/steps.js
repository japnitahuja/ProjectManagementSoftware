const mongoose = require('mongoose')
const stepSchema = new mongoose.Schema({
    stepName:{
        type: String,
        required: [true, 'Please enter a name for the step']
    },
    isStepDone:{
        type: Boolean,
        default: false
    },
    questionStatement:{
        type: String
    },
    questionType:{
        type: String
    },
    isQuestionAnswered:{
        type: Boolean,
        default: false
    },
    stepQuestionResponse:{
        type: String
    },
    relatedTask:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})
mongoose.model('Step', stepSchema)