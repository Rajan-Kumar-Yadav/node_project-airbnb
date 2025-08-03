// External Module
const path = require('path')
const express = require('express');

const hostRouter = express.Router();

//Local Module
const rootdir = require("../utils/pathUtil")

hostRouter.get("/add-home",(req,res,next) => {
 res.sendFile(path.join(rootdir,"views","addHome.html")  );
})

hostRouter.post("/add-home",(req,res,next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir,"views","homeAdded.html"))
})


module.exports = hostRouter;