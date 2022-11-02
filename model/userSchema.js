const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    ccode: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    timetaken: {
        type: Number,
        default: 0,
    },
    checkone: {
        type: Boolean,
        default: false,

    },
    checktwo: {
        type: Boolean,
        default: false,
    },
    checkthree: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true,
    },
);


const User = mongoose.model('USER', userSchema);
module.exports = User;