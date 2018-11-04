const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/celebrities',  (req, res, next) => {
  Celebrity.find()
  .then (celebsFromDb =>{
    console.log("DEBUG", celebsFromDb)
    res.render('celebrities', {
      listOfCelebs: celebsFromDb
    } )
  })

  .catch ((err => {
    next(error)
  }))
  })


  router.get('/celebrities/:id', (req, res, next) => {
    let id = req.params.id 
    Celebrity.findById(id)
      .then(celebsFromDb => {
        res.render('show-celeb', {
          celebrity: celebsFromDb
        })
      })
      .catch(error => {
        next(error)
      })
  });

  router.get('/new-celeb', (req, res, next) => {
    // The simple render without the publishers
    res.render('new-celeb')
  
    // Publisher.find({}, null, { sort: { name: 1 } })
    //   .then(publishers => {
    //     res.render('add-book', { publishers })
    //   })
  })
  
  



module.exports = router;
