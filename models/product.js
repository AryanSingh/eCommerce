var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Category= require('./category');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category',es_schema: Category, es_indexed:true},
  name: {type:String, es_indexed:true},
  price: {type:Number, es_indexed: true},
  image: {type:String, es_indexed:true}
});

ProductSchema.plugin(mongoosastic, {
  hosts: [
    'https://aeb708c4056bfe81a6d8590a2467e00c.us-east-1.aws.found.io:9243'
  ],
  populate: [
    {path: 'category'}
  ]
});

module.exports = mongoose.model('Product', ProductSchema);
