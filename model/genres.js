
const mongoose = require('mongoose');

// Genre Schema
const genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = function(callback, limit) {
	Genre.find(callback).limit(limit);
}

// add genress
module.exports.addGenres = function(genre, callback){
	Genre.create(genre, callback);
}

// Update genres 
module.exports.updateGenres = function(id , genre, options, callback){
	var query = {_id : id};
	var update = {
		name : genre.name
	}

	Genre.findOneAndUpdate(query, update, options, callback);
}


// Delete genress
module.exports.deleteGenres = function(id, callback){
	var query = {_id : id };
	Genre.remove(query, callback);
}