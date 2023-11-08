const mongoose = require('mongoose');



const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email:  {
        type: String,
        required: true,
        unique: true
    },

    password:  {
        type: String,
        required: true
    },

    username:  {
        type: String,
        required: true
    },

    verified: {
        type: Boolean,
        default: false,
        required: true
    }


})



const user = mongoose.model("user", userSchema)



module.exports = user