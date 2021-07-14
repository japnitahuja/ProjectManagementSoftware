const mongoose = require('mongoose')
const changeOrderItemSchema = new mongoose.Schema({
    itemName:{
        type: String,
        },
    itemNumber:{
        type:Number,
       
    },
    comment:{
        type:String,
        },
    itemValue:{
        type: Number,
        required:[true, 'Please enter the price of the item!']
    }
})
mongoose.model('changeOrderItem', changeOrderItemSchema)