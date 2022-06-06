const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    csno: {
        type:Number,
        maxlength:5,
        unique:true
    },
    userName: {
        type: String,
        maxlength: 10
    },
    emailId: {
        type:String,
        trim:true
    },
    userPw: {
        type: String,
        minlength:5
    },
    emailDomain: {
        type:String,
        trim:true
    },
    fullEmailAddr: {
        type:String,
        trim:true,
        unique:1
    },
    telno1: {
        type:Number,
        trim:true,
        maxlength:3
    },
    telno2: {
        type:Number,
        trim:true,
        maxlength:3
    },
    telno3: {
        type:Number,
        trim:true,
        maxlength:3 
    },
    userLastName: {
        type: String,
        maxlength: 10
    },
    role: {
        type:Number,
        default:0,  // 0: 일반사용자   , 1:관리자
    },
    image:String,
    token: {
        type: String
    },
    tokenExp: {
        type:Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }