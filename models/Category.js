const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: { type: String, require: true },
  description: { type: String },
  createdDate: { type: Date, default: new Date() },
});

const Category = model("Category", CategorySchema);

module.exports = Category;
