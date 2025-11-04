const filmsController = require('../controllers/films.controller');
const router = require('express').Router();

// GET http://localhost:3000/api/films/:title
router.get("{/:title}", filmsController.getFilmTitle);

// POST http://localhost:3000/api/films
router.post("/", filmsController.postFilm);


//PUT
router.put("/", filmsController.putFilm);

//DELETE
router.delete("/",filmsController.deleteFilm);

module.exports = router;