var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	name: { type: String, required: true, unique: true },
	origin: String,
	description: String,
	tags: [Number],
	nutrition: String

}, {
  collection: 'Ingredient'
});



module.exports = mongoose.model('Ingredient', IngredientSchema);

