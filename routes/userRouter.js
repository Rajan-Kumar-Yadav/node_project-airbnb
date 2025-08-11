//core Modules
const path = require('path')

//External Module
const express = require('express');

const userRouter = express.Router();
//Local Module

const { registeredHomes } = require('./hostRouter');
 
userRouter.get("/",(req,res,next) => {

 res.render('home', {registeredHomes: registeredHomes , pageTitle: 'airbnb HOme' , currentPage:'home'} );

})

module.exports = userRouter;