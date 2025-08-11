// External Module
const path = require('path')
const express = require('express');

const hostRouter = express.Router();

//Local Module
const rootdir = require("../utils/pathUtil")



hostRouter.get("/add-home",(req,res,next) => {
res.render('addHome', {pageTitle: 'add Home to airbnb' , currentPage: 'addHome'})
})
const registeredHomes = [];
hostRouter.post("/add-home",(req,res,next) => {
  console.log("Home Registration successful for:",req.body );
  registeredHomes.push(req.body)
  res.render('homeAdded', {pageTitle: 'Home add sucessfully' ,currentPage: 'homeAdded'})
})


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;