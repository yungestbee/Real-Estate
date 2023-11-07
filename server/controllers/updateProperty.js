const http = require('http-status-codes')
const property = require('../models/propertySchema')



const updateProperty = async (req, res)=>{
    console.log(req.body)
    const value = req.body
    const id = req.params.id
    value['image'] = req.file.location
    if (Object.keys(req.body).length === 0) {
        return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "Please fill at least one field" });
      }
    try {
        const propertyy = await property.findById(id)
        if (!propertyy) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "couldn't fetch property" })
        console.log(propertyy)
        try {
            const update = await property.updateOne({ _id: id }, { $set: value})
            if(!update) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "couldn't update property" })
        } catch (error) {
            console.log(error.message)
            return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message })
        }
        return  res.status(http.StatusCodes.OK).json({message: "property updated successfully"})
        
    } catch (error) {
            console.log(error.message)
            return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}


module.exports = updateProperty