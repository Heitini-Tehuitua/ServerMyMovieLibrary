const express = require('express')
const cors = require('cors')
router = express.Router()
const createFunctions = require('./functions/CreateFunction')
const readFunctions = require('./functions/ReadFunction')
const updateFunctions = require('./functions/updateFunction')
const deleteFunctions = require('./functions/deleteFunction')

router.use(cors())
router.use(express.urlencoded())

// Create
router.post('/peoples/insert', createFunctions.InsertPeople)

//---Read
router.get('/', readFunctions.GetMovies)
router.get('/movies', readFunctions.GetMovies)
router.get('/movieDetails?:id', readFunctions.GetMovie)
router.get('/movieRandom?', readFunctions.GetRandomMovie)
router.get('/peoples', readFunctions.GetPeoples)
router.get('/peopleDetails?:id', readFunctions.GetPeople)
router.get("/users", readFunctions.GetUsers)

//Update
router.post('/movies/update', updateFunctions.UpdateMovie)
router.post('/peoples/update', updateFunctions.UpdatePeople)

//Delete
router.post('/peoples/delete', deleteFunctions.DeletePeople)

module.exports = router;