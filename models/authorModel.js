const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const AuthorSchema = new Schema({
	first_name: { type: String, required: true, maxLength: 100 },
	family_name: { type: String, required: true, maxLength: 100 },
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
	if (!(this.date_of_birth && this.date_of_death)) {
		return "Unknown";
	}

	let formattedBirthDate = this.date_of_birth
		? DateTime.fromJSDate(this.date_of_birth).toLocaleString(
				DateTime.DATE_MED
		  )
		: "Unknown";

	let formattedDeathDate = this.date_of_death
		? DateTime.fromJSDate(this.date_of_death).toLocaleString(
				DateTime.DATE_MED
		  )
		: "Unknown";
	return formattedBirthDate + " - " + formattedDeathDate;
});

AuthorSchema.virtual("url").get(function () {
	return `/catalog/author/${this._id}`;
});

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
