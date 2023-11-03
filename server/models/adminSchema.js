const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
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
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    username:  {
        type: String,
        required: true
    },
    authentication: {
        type: String,
      }
})

const admin = mongoose.model("admin", adminSchema)

module.exports = admin