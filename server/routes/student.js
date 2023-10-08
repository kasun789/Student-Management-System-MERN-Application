const express = require('express');
const student = require('../module/student');
const route = express.Router();


//create a student
route.post('/student/create',(req,res)=>{
    let createPost = new student(req.body);
    createPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            Success:"Data Added Successfull"
        });
    });
});

//get method
route.get('/student',(req,res)=>
    student.find().exec((err,p)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            Success : true,
            resulting:p
        });
    })
);

//Put method
route.put('/student/update/:id',(req,res)=>{
    student.findByIdAndUpdate(
        req.params.id,{
            $set : req.body
        },
        (err,p)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                Success:"Update Successfully."
            });
        }
    )
    
});

//delete method
route.delete('/student/delete/:id',(req,res)=>{
    student.findByIdAndDelete(req.params.id).exec((err,deletestudent)=>{
        if(err){
            return res.status(400).json({
                message : "Delete Unsuccessfull",err
            });
        }
        return res.status(200).json({
            message : "Delete Successfull",deletestudent
        });
    });
});

//get specific student
route.get('/student/:id',(req,res)=>{
    let studentid = req.params.id;
    student.findById(studentid,(err,p)=>{
        if(err){
            return res.status(400).json({Success:false,err});
        }
        return res.status(200).json({Success:true,p})
    })
});

module.exports = route;