const connectionString = "mongodb://" + process.env.SERVER_M_ADDRESS  + ':' + process.env.SERVER_M_PORT + '/' + process.env.DATABASE_NAME
// DB connection
const Schema = require('../MongooseSchema')

module.exports = {
    DeletePeople : function(req, res) {
        res.setHeader('content-type', 'application/json')
        console.log("PEOPLE ID : " + req.body.id)
        Schema.Peoples.deleteMany(
            {_id : req.body.id}, 
            function(err,result){
                if(err){
                    res.send({error : "ERROR_DELETE"})
                } else {
                    res.send({response : "REQUEST_ACCEPT"})
                }
            }
        )
    }
}
    


