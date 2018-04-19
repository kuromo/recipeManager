var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
	name: { type: String, required: true, unique: true },
	description: String,
}, {
  collection: 'Tag'
});



module.exports = mongoose.model('Tag', TagSchema);

