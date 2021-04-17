const connectionString = "mongodb://" + process.env.SERVER_M_ADDRESS  + ':' + process.env.SERVER_M_PORT + '/' + process.env.DATABASE_NAME
// DB connection
const Schema = require('../MongooseSchema')

module.exports = {
    UpdateMovie : function(req, res) {
        res.setHeader('content-type', 'application/json')
        // Schema.Movies.updateOne({_id : req.body.id},
        //     {
        //         title : req.body.title,
        //         synopsis : req.body.synopsis,
        //         releaseDate : req.body.releaseDate,
        //         genre : req.body.genre,
        //         duration : req.body.duration,
        //         posterLink : req.body.posterLink,
        //         trailerLink : req.body.trailerLink,
        //         directors : req.body.directors,
        //         writers : req.body.writers,
        //         actors : req.body.actors
        //     },
        //     function(err, result){
        //         if(err){
        //             res.send({error : "ERROR_UPDATE"})
        //         } else {
        //             res.send({response : "REQUEST_ACCEPT"})     
        //         }
        //     }
        // )
       console.log("OK : " + req.body.genre)
        
    },
    UpdatePeople : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Peoples.updateOne({_id : req.body.id},
            {
                lastname : req.body.lastname,
                firstname : req.body.firstname,
                biography : req.body.biography,
                birthDate : req.body.birthDate,
                deathDate : req.body.deathDate,
                picture : req.body.picture,
            },
            function(err, result){
                if(err){
                    res.send({error : "ERROR_UPDATE"})
                } else {
                    res.send({response : "REQUEST_ACCEPT"})     
                }
            }
        )
       console.log("OK MODIF : " + req.body.birthDate)   
    },
}
    


