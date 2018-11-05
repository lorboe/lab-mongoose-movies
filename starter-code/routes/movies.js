const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

//MOVIES CODE

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(moviesFromDb => {
      console.log("DEBUG", moviesFromDb);
      res.render("movies", {
        listOfMovies: moviesFromDb
      });
    })

    .catch(error => {
      next(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
    .then(moviesFromDb => {
      res.render("show-movie", {
        movie: moviesFromDb
      });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/new-movie", (req, res, next) => {
  res.render("new-movie");
});

router.post("/movies", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(movie => {
      res.redirect("/movies/");
    })
    .catch(err => {
      console.log("there was an error adding your movie");
      res.redirect("new-movie");
    });
});



//not working
router.get("/movies/:id/edit", (req, res, next) => {
  console.log("HELLLOOOO")
  Movie.findById(req.params.id).then(movie => {
    res.render("edit-movie", { movie });
  });
});

router.post("/movies/:id/edit", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }).then(movie => {
    res.redirect("/movies" + movie._id);
  });
}); 

router.post("/movies/:id/delete", (req, res, next) => {
  // let id = req.params.id
  Movie.findByIdAndRemove(req.params.id)
    .then(moviesFromDb => {
      res.redirect("/movies");
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
