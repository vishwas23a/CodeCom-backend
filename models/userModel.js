import mongoose from 'mongoose';
const userSchema= new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        number:{type:Number},
        lastLogin:{type: String, default:Date.now()},
        isVerified: {type: Boolean, default: false},
        verificationToken:String,
        verificationTokenExpiresAt:Date,
        resetToken: String,
        resetTokenExpiration: Date
    },{timestamps:true})

    export const User=mongoose.model('user',userSchema)
