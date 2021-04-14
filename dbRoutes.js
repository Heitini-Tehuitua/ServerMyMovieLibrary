const express = require('express')
const cors = require('cors')
router = express.Router()
const functions = require('./ApiFunction')

router.use(cors())

//---Home
router.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.json("Accueil")
})

router.get('/movies', functions.GetMovies);
router.get('/movieDetails?:id', functions.GetMovie);
router.get('/peoples', functions.GetPeoples);
router.get('/peopleDetails?:id', functions.GetPeople);

module.exports = router;