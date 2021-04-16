const connectionString = "mongodb://127.0.0.1:27017/MyMovieLibraryDB"
// const connectionString = process.env.SERVER_ADDRESS  + ':' + process.env.SERVER_PORT + '/' + process.env.DATABASE_NAME
// DB connection
var mongoose = require('mongoose');
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const actorSchema = new mongoose.Schema({
    id : String,
    role : String
});

const movieSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String, 
    synopsis : String, 
    releaseDate : String, 
    genre : [String],
    duration : Number,
    posterLink : String,
    trailerLink : String,
    directors : Array,
    actors : [actorSchema],
    writers : Array
}, {
    collection : 'movies'
});

const peopleSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    lastname : String, 
    firstname : String, 
    biography : String, 
    birthdate : String,
    deathdate : String,
    picture : String,
}, {
    collection : 'peoples'
});

const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    lastname : String, 
    firstname : String, 
    email : String,
    birthdate : String,
    telephone : Number,
    genre : String,
    password : String
}, {
    collection : 'users'
});

// Theaters
const theaterSchema = new mongoose.Schema({
    name: String, 
    address: String
});

//Theathers.create({ name: 'Concorde', address: 'Papeete'});

module.exports = {
    Movies : mongoose.model('Movies', movieSchema),
    Peoples : mongoose.model('Peoples', peopleSchema),
    Users : mongoose.model('Users', userSchema),
    Theaters : mongoose.model('Theathers', theaterSchema)
}