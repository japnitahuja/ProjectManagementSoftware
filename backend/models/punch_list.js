const mongoose = require('mongoose')
const punchListSchema = new mongoose.Schema({
    punchListName:{
        type: String
    },
    punchListAssignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    punchListAssignedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    punchListItems:[{
        punchListItemName: {
            type: String
        }
    }]
})

mongoose.model('punchList', punchListSchema)