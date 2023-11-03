const bcrypt = require('bcryptjs')
const http = require('http-status-codes')
const crypto = require("crypto")
const signUpJoi = require('../validators/signUpJoi')
const user = require('../models/userSchema')



const register = async (req, res, next)=>{
    console.log(req.body)
    const {error, value} = signUpJoi.validate(req.body)
    if (error) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: error.message })

    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(value.password, salt)
        console.log(hashedPassword)

        const registration = await user.create({
            firstName: value.firstName,
           lastName: value.lastName,
            email: value.email,
            username: value.username,
            password: hashedPassword

        })

        if (!registration) return res.status(http.StatusCodes.BAD_REQUEST).json({ message: "couldn't create account" })
        console.log(registration)
        req.user = registration

        next()
        
    } catch (error) {

        if (error.code === 11000 && error.keyPattern.email === 1) {

            // Duplicate email error

            const duplicateEmail = error.keyValue.email;
            const errorMessage = `The email ${duplicateEmail} is already in use.`;
            return res.status(http.StatusCodes.BAD_REQUEST).json({ message: errorMessage })

        }else{
            console.log(error.message)
            return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
        }

    }
}



module.exports = register