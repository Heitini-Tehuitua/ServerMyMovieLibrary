const connectionString = "mongodb://" + process.env.SERVER_M_ADDRESS  + ':' + process.env.SERVER_M_PORT + '/' + process.env.DATABASE_NAME
// DB connection
const Schema = require('../MongooseSchema')

module.exports = {
    InsertPeople : function(req, res) {
        res.setHeader('content-type', 'application/json')

        Schema.Peoples.insertMany(
            {
                lastname : req.body.lastname,
                firstname : req.body.firstname,
                biography : req.body.biography,
                birthdate : req.body.birthDate,
                deathdate : req.body.deathDate,
                picture : req.body.picture
            },
            function(err, result){
                if(err){
                    res.send({error : 'ERROR_INSERT'})
                } else {
                    res.send({response : 'REQUEST_ACCEPT'})
                }
            }
        )
        console.log(req.body.lastname)
    }
}
    


