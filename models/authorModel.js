const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	first_name: String,
	family_name: String,
	date_of_birth: Date,
	date_of_death: Date,
	name: String,
	lifespan: String,
	url: String,
});

const Author = mongoose.model("Author", AuthorSchema);
