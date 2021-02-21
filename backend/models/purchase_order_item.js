const mongoose = require('mongoose')
const purchaseOrderItemSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: [true, 'Please provide the item name for the purchase order!']
    },
    itemNumber:{
        type:Number,
        required: [true, 'Please provide the no. of items purchased!']
    },
    itemsShipped:{
        type:Number,
        required: [true, 'Please provide the no. of items shipped!']
    },
    itemValue:{
        type: Number,
        required:[true, 'Please enter the price of the item!']
    }
})
mongoose.model('purchaseOrderItem', purchaseOrderItemSchema)