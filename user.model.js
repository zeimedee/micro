const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    
    user_first_name:{
        type: String,
        required: true
    },
    user_last_name:{
        type: String,
        required: true
    },
    user_email:{
        type: String,
        required: true
    },
    user_image:{
        type: String,
        required: true
    },
    is_user_Logged:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", User)