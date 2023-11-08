const http = require('http-status-codes')
const user = require("../models/userSchema");
const sendEmail = require('../utils/transport')
const jwt = require('jsonwebtoken')


const forgotPassword = async (req, res) => {
    try {
        const getUserEmail = await user.findOne(req.body)
        if(!getUserEmail) return res.status(http.StatusCodes.BAD_REQUEST).json({message: "Email not registered"})
        const payload = {
            id : getUserEmail._id,
            email : getUserEmail.email
        }

        const token = jwt.sign(payload, process.env.secretkey, {expiresIn: 10*60})

        const link = `${process.env.BASE_URL}/reset-Password/${getUserEmail._id}/${token}`
        console.log(link)
        await sendEmail(getUserEmail.email, "Reset Password", link)
        return res.status(http.StatusCodes.OK).json({message: "An Email was sent to you, Please reset your password"})
        
    } catch (error) {
        console.log(error.message)
        return res.status(http.StatusCodes.BAD_REQUEST).json({message: error.message})
    }
    
}

module.exports = forgotPassword