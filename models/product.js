var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  category: { type: Schema.ObjectId, ref: 'Category'},
  name: String,
  price: Number,
  image: String
});
ProductSchema.plugin(mongoosastic,{
  hosts: [
    'localhost:9200'
  ]
});
module.exports = mongoose.model('Product', ProductSchema);
// https://aeb708c4056bfe81a6d8590a2467e00c.us-east-1.aws.found.io:9243
