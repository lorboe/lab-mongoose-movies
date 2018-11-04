// const express = require('express');
// const router  = express.Router();
// const Celebrity = require('../models/celebrity');

// router.get('/celebrities',  (req, res, next) => {
//   Celebrity.find()
//   .then (celebsFromDb =>{
//     console.log("DEBUG", celebsFromDb)
//     res.render('./celebrities/index', {
//       listOfCelebs: celebsFromDb
//     } )
//   })

//   .catch ((err => {
//     next(error)
//   }))
//   })


//   router.get('/celebrities/:id', (req, res, next) => {
//     let id = req.params.id 
//     Celebrity.findById(id)
//       .then(celebsFromDb => {
//         res.render('./celebrities/show', {
//           celebrity: celebsFromDb
//         })
//       })
//       .catch(error => {
//         next(error)
//       })
//   });

  
  



//   module.exports = router