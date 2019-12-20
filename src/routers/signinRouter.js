var express = require('express');
var {signupModel}=require('../models/signupModel');
var signinRouter = express.Router();

function route() {

    signinRouter.route('/')
        .post((req, res) => {
            console.log("signin");
            signupModel.findOne({ email: req.body.email, password: req.body.password }, (err, data) => {
                if (err) {
                    res.json({ Status: "Error" });
                    

                }
                else if (!data) {
                    res.json({ Status: "Invalid" });
                }
                else {
                    res.json({ Status: "Success" });
                }
            });

        });
        


    return signinRouter;
}
module.exports = route;
