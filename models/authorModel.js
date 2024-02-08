const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	first_name: String,
	family_name: String,
	date_of_birth: Date,
	date_of_death: Date,
});

AuthorSchema.virtual("name").get(function () {
	let fullName = "";
	if (this.first_name && this.family_name) {
		fullName = this.first_name + " " + this.family_name;
	}
	return fullName;
});

AuthorSchema.virtual("lifespan").get(function () {
	let maxDate = this.date_of_death || new Date();
	return maxDate.getUTCFullYear() - this.date_of_birth.getUTCFullYear();
});

AuthorSchema.virtual("url").get(function () {
	return `/catalog/author/${this._id}`;
});

const Author = mongoose.model("Author", AuthorSchema);
