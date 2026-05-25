// DEPENDENCIES
const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// ROUTES
router.get("/search", movieController.searchMovies);
router.get("/movies/:id", movieController.getMovieDetails);

// EXPORTS
module.exports = router;