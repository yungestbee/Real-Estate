const http = require('http-status-codes')
const property = require('../models/propertySchema')



const deleteProperty = async (req, res)=>{
    const id = req.params.id

    try {
        const propertyy = await property.findByIdAndDelete(id)
        if (!propertyy) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "couldn't delete property" })
        return  res.status(http.StatusCodes.OK).json({message: "property deleted"})
        
    } catch (error) {
            console.log(error.message)
            return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}

module.exports = deleteProperty