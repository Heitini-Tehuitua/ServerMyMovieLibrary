const express = require('express')
const cors = require('cors')
router = express.Router()
const functions = require('./ApiFunction')

router.use(cors())
router.use(express.urlencoded())

//---Home
router.get('/', functions.Home)

router.get('/movies', functions.GetMovies)
router.get('/movieDetails?:id', functions.GetMovie)
router.get('/movieRandom?', functions.GetRandomMovie)
router.post('/movies/update', functions.UpdateMovie)
router.get('/peoples', functions.GetPeoples)
router.get('/peopleDetails?:id', functions.GetPeople)
router.post('/peoples/update', functions.UpdatePeople)
router.post('/peoples/insert', functions.InsertPeople)
router.post('/peoples/delete', functions.DeletePeople)

router.get("/users", functions.GetUsers)
router.post("/users/insert", functions.InsertTheater)
router.post("/users/update", functions.UpdateTheater)
router.post("/users/delete", functions.DeleteTheater)
module.exports = router;