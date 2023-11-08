const joi = require('joi')

const resetJoi = joi.object({
    newPassword: joi.string()
    .alphanum()
    .min(4)
    .max(30)
    .required(),
    confirmNewPassword: joi.string()
    .alphanum()
    .min(4)
    .max(30)
    .required()
})

module.exports = resetJoi