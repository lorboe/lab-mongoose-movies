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
    res.render('new-celeb')
  
  })
  
  //this is not working - form doesnt save to the database.....
  router.post('/new-celeb', (req, res, next) => {
  
   // Create a celebrity in the db with the information from the form
    Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    })
    .then(celebrity => {
      celebrity.save(function (err, celebrity) {
        if (err) {Console.log("AHHHHHHH error")} })
        res.redirect('/celebrities/' + celebrity._id)
      })
      .catch((err) => {
       console.log("there was an error adding your celeb")
       res.redirect("new-celeb")
      })
  })
  

router.post('/celebrities/:id/delete', (req, res, next) => {
 // let id = req.params.id
Celebrity.findByIdAndRemove(req.params.id)
.then (celebsFromDb => {
  res.redirect('/celebrities')
})
.catch((error) => {
  next(error)
})
})



module.exports = router;
