const http = require('http-status-codes')
const property = require('../models/propertySchema')



const getAllProperties = async (req, res)=>{
    try {
        const allProperties = await property.find({})
        if (!allProperties) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "couldn't fetch properties" })
        // console.log(registration)
        return  res.status(http.StatusCodes.OK).json(allProperties)
        
    } catch (error) {
            console.log(error.message)
            return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}


module.exports = getAllProperties