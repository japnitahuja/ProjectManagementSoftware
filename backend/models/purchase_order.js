const mongoose = require('mongoose')
const purchaseOrderSchema = new mongoose.Schema({
    PoTitle:{
        type: String,
        required: [true, 'Please enter the company from which the order was purcased']
    },
    totalOrderAmount:{
        type:Number,
    },
    purchasedItem:{
        type: String,
    },
    totalPaidAmount:{
        type:Number,
    },
    purchasedItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "purchaseOrderItem"
    }],
    PoCreatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },  
    paid: {
        type: Boolean,
        default: false
    },
    payee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    group: {
        type: String
    },
    PoDate: {
        type: Date,
        default: Date.now()
    },
    terms: {
        type: String
    },
    DueDate: {
        type: Date
    }
})

mongoose.model('purchaseOrder', purchaseOrderSchema)