const connectionString = "mongodb://" + process.env.SERVER_M_ADDRESS  + ':' + process.env.SERVER_M_PORT + '/' + process.env.DATABASE_NAME
const Schema = require('../MongooseSchema')

module.exports = {
    GetMovies : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Movies.find({}, function(err, movies) {
            res.json(movies)
        });
    },
    GetMovie : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Movies.findById(req.query.id, function(err, movie) {
            if (err) {
                console.log("Error while getting object");
                res.send({error : "MOVIE_NOT_FOUND"});
            } else {
                console.log("Movie : ", movie);
                res.json(movie)
            }
        });
    },
    GetRandomMovie : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Movies.count().exec(function(err, count){
            var random = Math.floor(Math.random() * count);
            Schema.Movies.findOne().skip(random).exec(
              function (err, movie) {
                if (err) {
                    console.log("Error while getting object");
                    res.send(err);
                } else {
                    console.log("Movie : ", movie);
                    res.json(movie)
                }
            });
        });
    },
    GetPeoples : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Peoples.find({}, function(err, peoples) {
            res.json(peoples)
        });
    },
    GetPeople : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Peoples.findById(req.query.id, function(err, people) {
            if (err) {
                console.log("Error while getting object");
                res.send({error : "PEOPLE_NOT_FOUND"});
            } else {
               // console.log("People : ", people);
                res.json(people)
            }
        });
    },
    GetUsers : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Users.find({}, function(err, users) {
            res.json(users)
        });
    }
}
    


