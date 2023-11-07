const token = require("../models/tokenSchema");
const sendEmail = require('../utils/transport');
const crypto = require("crypto");
const http = require('http-status-codes')

const sendMail = async (req, res, next)=>{
    console.log(req.user)
    const user = req.user
    try {
        const Token =  await new token({
            userId: user._id,
            token: crypto.randomBytes(32).toString('hex')
        }).save();
        console.log(Token)
        const url = `${process.env.BASE_URL}/admin/${user._id}/verify/${Token.token}`
        console.log(url)
        await sendEmail(user.email, "Verify your Email", url)
        return res.status(http.StatusCodes.OK).json({message: "An Email was sent to you"})
        
    } catch (error) {
        return res.status(http.StatusCodes.CONFLICT).json({message: error.message})
    }
}

module.exports = sendMail