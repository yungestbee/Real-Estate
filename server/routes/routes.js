const express = require("express")
const login = require("../controllers/login")
const register = require("../controllers/signUp")
const resetPassword = require("../controllers/resetPassword")
const sendMail = require("../middlewares/sendToken")
const updateMail = require("../controllers/updateMail")
const forgotPassword = require("../controllers/forgotPassword")
const addProperty = require("../controllers/addProperty")
const getAllProperties = require("../controllers/getAllProperties")
const getProperty = require("../controllers/getProperty")
const updateProperty = require("../controllers/updateProperty")
const deleteProperty = require("../controllers/deleteProperty")
const upload = require("../middlewares/multerS3")

const route = express.Router()

route.post("/api/login", login)

route.post("/api/register", register, sendMail)

route.get("/admin/:id/verify/:token", updateMail)

route.post("/api/reset-password/:id/:token", resetPassword )

route.post("/api/reset-password", forgotPassword)

route.post("/api/property",addProperty)

route.get("/api/properties", getAllProperties)

route.get("/api/property/:id", getProperty)

route.put("/api/property/:id", updateProperty)

route.delete("/api/property/:id", deleteProperty)

module.exports = route