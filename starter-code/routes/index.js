const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/index-celeb',  (req, res, next) => {
  Celebrity.find()
  .then (celebsFromDb =>{
    console.log("DEBUG", celebsFromDb)
    res.render('index-celeb', {
      listOfCelebs: celebsFromDb
    } )
  })
  .catch ((error => {
    next(error)
  }))
  })


  router.get('/index-celeb/:id', (req, res, next) => {
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
  
  router.post('/index-celeb', (req, res, next) => {
  
   // Create a celebrity in the db with the information from the form
    Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    })
    .then(celebrity => {
        res.redirect('/index-celeb/')
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


router.get('/celebrities/:id/edit' , (req, res, next) => {
Celebrity.findById(req.params.id)
.then (celebsFromDb => {
  res.render ('/celebrities/edit-celebrity', {
    celebrity: celebsFromDb
  })
})
.catch ((error) => {
  next(error)
})
})


router.post('/celebrities/:id/edit' , (req, res, next) => {
Celebrity.findByIdAndUpdate(req.params.id, {
name: req.body.name,
occupation: req.body.occupation,
catchPhrase: req.body.catchPhrase,
})
.then(celebrity =>{
  res.redirect("/celebrities")
})
.catch((error)=>{
  next(error)
})
})

//Movies

router.get('/movies',  (req, res, next) => {
  Movie.find()
  .then (moviesFromDb => {
    console.log("DEBUG", moviesFromDb)
    res.render('movies', {
      listOfMovies: moviesFromDb
    } )
  })

  .catch ((error => {
    next(error)
  }))
  })

  router.get('/movies/:id', (req, res, next) => {
    let id = req.params.id 
    Movie.findById(id)
      .then(moviesFromDb => {
        res.render('show-movie', {
          movie: moviesFromDb
        })
      })
      .catch(error => {
        next(error)
      })
  });



  router.get('/new-movie', (req, res, next) => {
    res.render('new-movie')
  
  })
  
  router.post('/movies', (req, res, next) => {
  
    Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
    })
    .then(movie => {
        res.redirect('/movies/')
      })
      .catch((err) => {
       console.log("there was an error adding your movie")
       res.redirect("new-movie")
      })
  })
  




module.exports = router;
