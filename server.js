var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
app.use(bodyParser.json());

var Genre   =  require('./model/genres');
var Book   =  require('./model/book');



//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('hi chetan ');
});

app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
		console.log(genres);
	});
});

//Add Genres
app.post('/api/genres', function(req, res){
	var genre  =  req.body;
	Genre.addGenres(genre, function(err, genres){
		if(err){
			throw err;
		}
		res.json(genre);
		console.log(genre);
	});
});


//Update genres

app.put('/api/genres/:_id', function(req, res){
	var id     =  req.params._id;
	var genre  =  req.body;
	Genre.updateGenres(id, genre, {}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
		});
});


//Delete
app.delete('/api/genres/:_id', function(req, res) {
	var id = req.params._id;
	Genre.deleteGenres(id, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});


// Return All booooooooks
app.get('/api/books', function(req, res) {
	Book.getBooks(function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
		console.log(book);
	});
});

// Add Book
app.post('/api/books', function(req, res){
	var book  =  req.body;
	Book.addBooks(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
		console.log(book);
	});
});

//Update boooooook

app.put('/api/books/:_id', function(req, res){
	var id     =  req.params._id;
	var book  =  req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
		});
});

//Delete
app.delete('/api/books/:_id', function(req, res) {
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});




//Get Book by Id
app.get('/api/books/:_id', function(req, res) {
	Book.getBookById(req.params._id,function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
		console.log(books);
	});
});


app.listen(3000, function(){
    console.log('index serving at port 3000');

});
