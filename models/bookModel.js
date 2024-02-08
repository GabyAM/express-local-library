const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: { type: String, required: true },
	author: [{ type: Schema.Types.ObjectId, ref: "Author" }],
	summary: { type: String, required: true },
	ISBN: { type: String, required: true },
	genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

BookSchema.virtual("url").get(function () {
	return `/catalog/book/${this._id}`;
});

const Book = mongoose.model("Book", BookSchema);
