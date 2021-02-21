const mongoose = require('mongoose')
const purchaseOrderSchema = new mongoose.Schema({
    orderFrom:{
        type: String,
        required: [true, 'Please enter the company from which the order was purcased']
    },
    totalOrderAmount:{
        type:Number,
        required: [true, 'Please enter the total order amount']
    },
    totalPaidAmount:{
        type:Number,
        required: [true, 'Please enter the total paid amount']
    },
    purchasedItems:[{
        item:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "purchaseOrderItem"
        }
    }],
    
    
})

mongoose.model('purchaseOrder', purchaseOrderSchema)