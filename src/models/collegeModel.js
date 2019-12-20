const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var collegeSchema = new Schema({
         university:String,
         category:String,
         approval:String,
         entrance:String,
         updated:String,
         actions:String,
         number :Number,
});
var collegeModel = mongoose.model('colleges', collegeSchema);                      
module.exports = {collegeModel};