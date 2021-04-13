const db = require('./db.json')

module.exports = {
    GetMovies : function (req, res){
        res.send(db.movies)
    },
    GetMovie : function(req, res){
        const id = req.params.id;
        const selectMovie = db.movies.filter(x => x._id === id)
        res.send(selectMovie)
    },
    GetActors : function(req, res){
        const actorsDB = [];

        db.movies.map(movie =>
            movie.actors.map( actor =>

            db.peoples.map(people => people._id = actor.id?(
                actorsDB.push(people)
            ) : null ))
        )

        const actors = Array.from(new Set(actorsDB));
        res.send(actors)
    },
    GetActor : function(req, res){
        const id = req.params.id;
        const selectActor = db.peoples.filter(x => x._id === id)
        res.send(selectActor)
    },
    GetDirectors : function(res, req){
        const directorsDB = [];

        db.movies.map(movie =>
            movie.directors.map( director =>

            db.peoples.map(people => people._id = director.id?(
                directorsDB.push(people)
            ) : null ))
        )

        const directors = Array.from(new Set(directorsDB));
        res.send(directors)

    }
}


