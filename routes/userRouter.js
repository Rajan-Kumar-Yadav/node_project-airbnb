//core Modules
const path = require('path')

//External Module
const express = require('express');

const userRouter = express.Router();
//Local Module
const rootdir = require("../utils/pathUtil")

userRouter.get("/",(req,res,next) => {

 res.sendFile(path.join(rootdir,"views","home.html"))
})

module.exports = userRouter;