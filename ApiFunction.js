const connectionString = "mongodb://127.0.0.1:27017/MyMovieLibraryDB"
// const connectionString = process.env.SERVER_ADDRESS  + ':' + process.env.SERVER_PORT + '/' + process.env.DATABASE_NAME
// DB connection
const Schema = require('./MongooseSchema')

module.exports = {
    GetMovies : function(req, res) {
        Schema.Movies.find({}, function(err, movie) {
            if (err) {
                console.log("Error while getting object");
                res.send(err);
            }
            console.log("Movie : ", movie);
            res.json(movie)
        });
        console.log('Variable env : ' + process.env)
    },
    GetMovie : function(req, res) {
        Schema.Movies.findById(req.query.id, function(err, movies) {
            if (err) {
                console.log("Error while getting object");
                res.send(err);
            }
            console.log("Movie : ", movies);
            res.json(movies)
        });
    },
    GetPeoples : function(req, res) {
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
        Schema.Peoples.findById(req.query.id, function(err, people) {
            if (err) {
                console.log("Error while getting object");
                res.send(err);
            }
            console.log("Movie : ", people);
            res.json(people)
        });
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
    


