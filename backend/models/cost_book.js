const mongoose = require('mongoose')

const costBookSchema = new mongoose.Schema({
        categoryName: {
            type: String,
            required: true
        },
        costCodes: [{
            costCodeTitle:{
                type: String,
                required: true
            },
            items: [{
                itemName: {
                    type: String,
                    required: true
                },
                partNo: {
                    type: Number,
                    required: true
                },
                cost: {
                    type: Number,
                    required: true
                },
                itemLink: {
                    type: String
                },
                description: {
                    type: String
                }
            }]
        }]
})

mongoose.model('CostBook', costBookSchema)