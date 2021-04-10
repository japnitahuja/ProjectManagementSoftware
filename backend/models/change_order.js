const mongoose = require('mongoose')
const changeOrderSchema = new mongoose.Schema({
    orderFrom:{
        type: String,
        required: [true, 'Please enter the company from which the order was purcased']
    },
    totalOrderAmount:{
        type:Number,
        required: [true, 'Please enter the total order amount']
    },
    purchasedItem:{
        type: String,
        required: [true, 'Please enter the item purchased']
    },
    totalPaidAmount:{
        type:Number,
        required: [true, 'Please enter the total paid amount']
    },
    purchasedItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "changeOrderItem"
    }],
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

mongoose.model('changeOrder', changeOrderSchema)