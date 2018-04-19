var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	name: { type: String, required: true, unique: true },
	ingredients: [Number],
	persons: Number,
	origin: String,
	description: String,
	preparation: String,
	category: [Number],
	tags: [Number],
	prepTime: Number,
	cookTime: Number,
	nutrition: String

}, {
  collection: 'Recipe'
});



module.exports = mongoose.model('Recipe', RecipeSchema);

