const nodemailer = require('nodemailer');

module.exports = async (email, subject, text)=>{
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: "yungestbee@gmail.com",
                pass: process.env.PASS
            }
        })
        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })
        console.log("Email sent successfully")
    }catch(error){
        console.log("Email not sent")
        console.log(error.message)
    }
}

