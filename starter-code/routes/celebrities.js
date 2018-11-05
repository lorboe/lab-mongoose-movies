const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");


//CELEBRITY CODE
//The naming convention: 
// /celebrities
router.get("/index-celeb", (req, res, next) => {
  Celebrity.find()
    .then(celebsFromDb => {
      console.log("DEBUG", celebsFromDb);
      res.render("index-celeb", {
        listOfCelebs: celebsFromDb
      });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/index-celeb/:id", (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then(celebsFromDb => {
      res.render("show-celeb", {
        celebrity: celebsFromDb
      });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/new-celeb", (req, res, next) => {
  res.render("new-celeb");
});

router.post("/index-celeb", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrity => {
      res.redirect("/index-celeb/");
    })
    .catch(err => {
      console.log("there was an error adding your celeb");
      res.redirect("new-celeb");
    });
});



//editing
// The naming convention: 
// /celebrities/:id/edit
router.get("/index-celeb/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("edit-celebrity", {celebrity});
  });
});

router.post("/index-celeb/:id/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(celebrity => {
    res.redirect("/index-celeb" + celebrity._id);
  });
});

router.post("/index-celeb/:id/delete", (req, res, next) => {
  // let id = req.params.id
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebsFromDb => {
      res.redirect("/index-celeb");
    })
    .catch(error => {
      next(error);
    });
});


module.exports = router;
