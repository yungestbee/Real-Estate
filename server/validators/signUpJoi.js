const joi = require('joi')

const signUpJoi = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email:  joi.string().required(),
    username: joi.string()
    .alphanum()
     .min(4)
     .max(30)
     .required(),

    password: joi.string()
     .min(8)
     .max(30)
     .required()
})

module.exports = signUpJoi