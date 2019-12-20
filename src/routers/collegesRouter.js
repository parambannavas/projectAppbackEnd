var express = require('express');
var { collegeModel } = require('../models/collegeModel');
var collegesRouter = express.Router();

function route() {

    collegesRouter.route('/')
        .get((req, res) => {
            collegeModel.find((err, data) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    console.log(data);
                    res.json({colleges:data});
                }
            });
        });
collegesRouter.route('/add')
        .post((req, res) => {
            console.log(req.body);
            var college = new collegeModel(req.body);
            college.save((err, result) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    console.log(result);
                    res.json({Status:"Success"});
                }
            });
        });

    collegesRouter.route('/edit')
        .post((req, res) => {
            collegeModel.findById(req.body.id, (err, data) => {
                if (err) {
                    res.json({ Status: "Error" });
                }
                else {
                    res.json({ Status: "Success", college: data });
                }
            });
        });
    collegesRouter.route('/update')
    .post((req,res)=>{
        console.log(req.body._id);
        collegeModel.findByIdAndUpdate(req.body._id,{$set:req.body},
          (err,result)=>{
            if(err)
            {
                res.json({Status:"Error"});
            }
            else{
                res.json({Status:"Success"});
            }
          });
    });

    collegesRouter.route('/delete')
    .post((req,res)=>{
        collegeModel.findByIdAndDelete(req.body.id,(err,result)=>{
            console.log(req.body.id)
            if(err){
                res.json({Status:"Error"});
            }
            else{
                res.json({Status:"Success"});
            }
        });
    });

    return collegesRouter;
}
module.exports = route;