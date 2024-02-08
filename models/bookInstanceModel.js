const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
	book: { type: Schema.Types.ObjectId, ref: "Book" },
	imprint: String,
	status: String,
	due_back: Date,
});

BookInstanceSchema.virtual("url").get(function () {
	return `/catalog/bookinstance/${this._id}`;
});

const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);
