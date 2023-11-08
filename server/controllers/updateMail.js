const user = require('../models/userSchema');
const token = require('../models/tokenSchema')


const updateMail = async (req, res) =>{
    try{
        const User = await user.findById(req.params.id)
        if(!User) return res.redirect("/verification-failed")
        const Token = await token.findOne({userId : User._id, token: req.params.token})
        await user.updateOne({_id: User._id, verified: true})
        await token.deleteOne({userId : User._id})
        return res.redirect("/verification-success")
        
    }catch(error){
        console.log(error.message)
        return res.status(400).json({message: error.message})
    }
}

module.exports = updateMail
