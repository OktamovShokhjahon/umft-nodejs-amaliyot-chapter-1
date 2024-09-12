const { Schema, model } = require("mongoose");

const AuthorSchema = new Schema({
  name: { type: String, require: true },
  biography: { type: String },
  createdDate: { type: Date, default: new Date() },
});

const Author = model("Author", AuthorSchema);

module.exports = Author;
