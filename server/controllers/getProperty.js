const http = require('http-status-codes')
const property = require('../models/propertySchema')



const getProperty = async (req, res)=>{
    const id = req.params.id
    console.log(id)

    try {
        const Property = await property.findById(id)
        if (!Property) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "property not available" })
        console.log(Property)
        return  res.status(http.StatusCodes.OK).json(Property)
        
    } catch (error) {
            console.log(error.message)
            return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}


module.exports = getProperty