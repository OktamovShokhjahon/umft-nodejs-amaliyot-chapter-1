const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, require: true },
  author: { type: Schema.Types.ObjectId, require: true, ref: "Author" },
  category: { type: Schema.Types.ObjectId, require: true, ref: "Category" },
  publishedYear: { type: Number, default: new Date().getFullYear() },
  summary: { type: String, require: true },
});

const Book = model("Book", BookSchema);

module.exports = Book;
