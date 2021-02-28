const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'Please enter First name!']
    },
    lastName:{
        type:String,
        required:false,
    },
    role:{
        type: String,
        enum: ['PROJECT_OWNER', 'TRADE_PARTNER', 'TASK_OWNER', 'ADMIN']
    },
    phoneNumber:{
        type:Number,
        required:[true, 'Please fill a valid phone number!'],
        minlength: 10,
        maxlength: 10,
    },
    username:{
        type:String,
        required:[true, 'Please fill username!']
    },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password:{
        type:String,
        required:true
    },
    isProjectOwnerApproved:{
        type: Boolean,
        default: false
    },
    requestsToJoin:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    isProjectOwnerDeclined:{
        type: Boolean,
        default: false
    },
    createdAt: {type: Date, default: Date.now}
})
mongoose.model('User', userSchema)