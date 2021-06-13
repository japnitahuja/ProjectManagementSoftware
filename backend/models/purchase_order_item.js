const mongoose = require('mongoose')
const purchaseOrderItemSchema = new mongoose.Schema({
    itemName:{
        type: String,
    },
    itemNumber:{
        type:Number,
       },
    itemValue:{
        type: Number,
        required:[true, 'Please enter the price of the item!']
    },
    comment: {
        type: String
    }
})
mongoose.model('purchaseOrderItem', purchaseOrderItemSchema)