var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  name: String,
  price: Number,
  image: String
});

ProductSchema.plugin(mongoosastic, {
  hosts: [
    'http://aeb708c4056bfe81a6d8590a2467e00c.us-east-1.aws.found.io:9200'
  ]
});

module.exports = mongoose.model('Product', ProductSchema);
