const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities',  (req, res, next) => {
  Celebrity.find()
  .then (celebsFromDb =>{
    console.log("DEBUG", celebsFromDb)
    res.render("./celebrities/index", {
      listOfCelebs: celebsFromDb
    } )
  })
  .catch ((err => {
    next(error)
  }))
//  res.render('celebrities')
  })

  module.exports = router