

const express = require('express')
const axios = require("axios")
router = express.Router()
const cors = require('cors')

const AllFunction = require('./ApiFunction')

router.use(cors())

//---Home


router.get('/', (req, res) => {
    res.send("Accueil")
    res.setHeader('Content-typer', 'application/json')
})

//---Actor

router.get('/actors', AllFunction.GetActors)
router.get('/actorDetails/:id', AllFunction.GetActor)

//---Movie


router.get('/movies', AllFunction.GetMovies)
router.get('/movieDetails/:id', AllFunction.GetMovie)


module.exports = router;