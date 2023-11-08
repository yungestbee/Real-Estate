const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    landSize:  {
        type: String,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    distanceFromTarredRoad: {
        type: String,
        required: true
    },
    documents: {
        type: Array,
    },
    promo: {
        type: String,

    },
    otherInfo : {
        type: String,

    },
    status: {
        type: String,
        required:true  
    }
})

const property = mongoose.model("property", propertySchema)

module.exports = property