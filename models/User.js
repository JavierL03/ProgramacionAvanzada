const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: String,
        default: Date.now
    }
});
module.exports = mongoose.model('User', userSchema);