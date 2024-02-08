const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
	book: { type: Schema.Types.ObjectId, ref: "Book" },
	imprint: String,
	//status enum
	due_back: Date,
	url: String,
});

const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);
