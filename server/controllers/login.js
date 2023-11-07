const http = require("http-status-codes");
 const bcrypt = require('bcryptjs');
 const loginJoi = require("../validators/loginjoi");
 const jwt = require('jsonwebtoken');
const user = require("../models/userSchema");

 const secretKey = process.env.secretKey

 const login = async (req, res)=>{
    const {error, value} = loginJoi.validate(req.body)
    console.log(req.body)
    if(error) return res.status(500).json(error.message)
    try {
        console.log(value)
        const currentUser = await user.findOne({username: value.username, verified: true})
        if(!currentUser) {
            return res.status(http.StatusCodes.NOT_ACCEPTABLE).json({ error: 'Credentials invalid'})
        }else{
                const isValidPassword = await bcrypt.compare(value.password, currentUser.password)
                if(!isValidPassword) {
                    console.log("currentUser")
                    return res.status(http.StatusCodes.NOT_ACCEPTABLE).json({ error: 'Invalid Credentials'})
                } else {
                    const token = await jwt.sign({username: value.username}, secretKey)
                    if(!token) {
                        console.log("invalid token")
                        return res.status(http.StatusCodes.UNAUTHORIZED).json({error: "invalid token"})
                    } else {
                        res.cookie("jwt", token, {
                            expires: new Date(Date.now() + 24 * 60 * 60 * 10 ),
                            secure: false,
                            httpOnly: true,
                            sameSite: "None"
                          })
                          const result = {
                            token: token,
                            reply: `Welcome back ${currentUser.username}`
                          }
                          // req.user = token
                          console.log(  )
                          return res.status(http.StatusCodes.OK).json(result);
                    }
                }
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json(error.message);
    }

 }

 module.exports = login

