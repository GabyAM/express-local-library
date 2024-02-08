const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: String,
	author: [{ type: Schema.Types.ObjectId, ref: "Author" }],
	summary: String,
	ISBN: String,
	genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
	url: String,
});

const Book = mongoose.model("Book", BookSchema);
