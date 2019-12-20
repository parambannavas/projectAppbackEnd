const mongoose = require('mongoose');
var signupSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: {
        type: String, required: true
    },
    password:String,
    confirmPassword:String,
    gender:String,
    residence:String,   
});
var signupModel=mongoose.model('updata',signupSchema);
module.exports={signupModel};