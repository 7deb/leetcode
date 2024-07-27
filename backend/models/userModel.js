const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    gender: { required: false, type: String, enum: ["male", "female"] },
    lastSubmissionDate: {type:Date,default:null},
    tokens:{type:Number,default:0},
    redeemCoins: {type:Number,default:0},
    streak:{type:Number,default:0}
},{timestamps:true});

const User = mongoose.model("user",userSchema);

module.exports = User;