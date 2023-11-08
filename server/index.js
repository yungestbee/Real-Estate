const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const route = require('./routes/routes')
const cors = require('cors')
const cookie = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')
const fileUpload = require('express-fileupload');



const app = express()

app.use(bodyParser.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(express.json())
app.use(cookie())
app.use(fileUpload());

app.use(cors())
app.use('/uploads', express.static('uploads'))
// app.use('/propertyImages', express.static(path.join(__dirname, 'propertyImages')))

app.use(route)

const uri = process.env.uri
const port = process.env.port || 3000


app.listen(port, ()=>{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("mongo connected")
    }).catch((error) => {
        console.log(error.message)
    })
    
    console.log(`Server listening on ${port}`)
})
