const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
	name: String,
	url: String,
});

const Genre = mongoose.model("Genre", GenreSchema);
