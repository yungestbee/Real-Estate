const user = require("../models/userSchema");
const resetJoi = require('../validators/resetJoi')
const http = require('http-status-codes')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const resetPassword = async (req, res) => {
    const id = req.params.id
    const token = req.params.token
    const {error, value} = resetJoi.validate(req.body)
    console.log(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).json({message: error.message})
    const decode = jwt.verify(token, process.env.secretkey)
    if(!decode) return res.status(http.StatusCodes.UNAUTHORIZED).json({message: error.message})
    try {
        const getUser = await user.findById(id)
        // console.log(getUser)
        if(!getUser) return res.status(http.StatusCodes.BAD_REQUEST).json({message: "User not found"})
        if(value.newPassword != value.confirmNewPassword) return res.status(http.StatusCodes.BAD_REQUEST).json({message: "Passwords doesn't match"})
        const compare = await bcrypt.compare(value.newPassword, getUser.password)
        if(!compare) return res.status(http.StatusCodes.BAD_REQUEST).json({message: "New password is similar to the old password, kindly enter a different password"})
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(value.newPassword, salt)
        console.log(hashedPassword)
        try {
            const updatedPassword = await user.updateOne({_id: id}, {password: hashedPassword})
            if(!updatedPassword) return res.status(http.StatusCodes.BAD_REQUEST).json({message: error.message})
        } catch (error) {
            console.log(error.message)
            return res.status(http.StatusCodes.BAD_REQUEST).json({message: error.message})
        }
        return res.status(http.StatusCodes.OK).json({message: "Password successfully changed"})
    } catch (error) {
        console.log(error.message)
        return res.status(http.StatusCodes.BAD_REQUEST).json({message: error.message})
    }

}

module.exports = resetPassword