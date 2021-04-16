const connectionString = "mongodb://" + process.env.SERVER_M_ADDRESS  + ':' + process.env.SERVER_M_PORT + '/' + process.env.DATABASE_NAME
// DB connection
const Schema = require('./MongooseSchema')

module.exports = {
    Home : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Movies.find({}, function(err, movie) {
            res.setHeader('content-type', 'application/json')
            if (err) {
                console.log("Error while getting object");
                res.send({ err});
            }
            console.log("Movie : ", movie);
            res.json(movie)
        });
    },
    GetMovies : function(req, res) {
        Schema.Movies.find({}, function(err, movie) {
            res.setHeader('content-type', 'application/json')
            if (err) {
                console.log("Error while getting object");
                res.send({ err});
            }
            console.log("Movie : ", movie);
            res.json(movie)
        });
        console.log('Variable env : ' + process.env)
    },
    GetMovie : function(req, res, next) {
        res.setHeader('content-type', 'application/json')
        Schema.Movies.findById(req.query.id, function(err, movies) {
            if (err) {
                console.log("Error while getting object");
                res.send({error : "MOVIE_NOT_FOUND"});
            } else {
                console.log("Movie : ", movies);
                res.json(movies)
            }
        });
    },
    GetRandomMovie : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Movies.count().exec(function(err, count){

            var random = Math.floor(Math.random() * count);

            Schema.Movies.findOne().skip(random).exec(
              function (err, result) {
                if (err) {
                    console.log("Error while getting object");
                    res.send(err);
                }
                console.log("Movie : ", result);
                res.json(result)
          
            });
        });
    },
    UpdateMovie : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Movies.updateOne({_id : req.body.id},
            {
                title : req.body.title,
                synopsis : req.body.synopsis,
                releaseDate : req.body.releaseDate,
                genre : req.body.genre,
                duration : req.body.duration,
                posterLink : req.body.posterLink,
                trailerLink : req.body.trailerLink,
                directors : req.body.directors,
                writers : req.body.writers,
                actors : req.body.actors
            },
            function(err, result){
                if(err){
                    console.log(err)
                } else {
                    res.send(result)     
                }
            }
        )
       console.log("OK : " + req.body.actors[0])
        
    },
    GetPeoples : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Peoples.find({}, function(err, peoples) {
            if (err) {
                console.log("Error while getting object");
                res.send(err);
            }
            console.log("Actor : ", peoples);
            res.json(peoples)
        });
    },
    GetPeople : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Peoples.findById(req.query.id, function(err, people) {
            if (err) {
                console.log("Error while getting object");
                res.send({error : "PEOPLE_NOT_FOUND"});
            }
            console.log("Movie : ", people);
            res.json(people)
        });
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
                    console.log(err)
                } else {
                    res.send(result)
                    
                }
            }
        )
       console.log("OK MODIF : " + req.body.lastname)
        
    },
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
            }
        )
        res.send("INSERT OK")
        console.log(req.body.deathDate)
    },
    DeletePeople : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Peoples.deleteMany({_id : req.body.id}, function(err,result){
            res.send(result)
        })
        console.log("PEOPLE ID : " + req.body.id)
    },
    GetUsers : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Users.find({}, function(err, users) {
            if (err) {
                console.log("Error while getting object");
                res.send(err);
            }
            console.log("Users : ", users);
            res.json(users)
        });
    },
    InsertTheater : function(req, res) {
        res.setHeader('content-type', 'application/json')
        if(req.body.name != '' && req.body.address != ''){

            Schema.Theaters.insertMany(
                { name : req.body.name, address : req.body.address}
            )
            res.send("INSERT OK")
            console.log(req.body)
        } else {
            res.send("INCOMPLETE CHAMP")
            console.log(req.body)
        }
    },
    UpdateTheater : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Theaters.updateOne({_id : req.body.id},
            { name : req.body.name, address : req.body.address},
            function(err, result){
                if(err){
                    console.log(err)
                } else {
                    res.send(result)
                    
                }
            }
        )
        
    },
    DeleteTheater : function(req, res) {
        res.setHeader('content-type', 'application/json')
        Schema.Theaters.deleteMany({_id : req.body.id}, function(err,result){
            res.send(result)
        })
        
    }
}
// GetActors : function(req, res){
//     Schema.Movies.find({}, function(err, movie) {
//         Schema.Peoples.find({}, function(err, people) {
//             let movies = movies;
//             let peoples = peoples;

//             movies.map(movie =>
//                 movie.actors.map(actor =>
//                     peoples.map(people =>
//                         people._id === actor.id?(
//                             res.
//                         ) : null);
//                     )
//                 )
//             )

//         });
//     });
// }
    


