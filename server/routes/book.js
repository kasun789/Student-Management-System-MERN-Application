const express = require('express');
const book = require('../module/book');
const route1 = express.Router();


//create a book
route1.post('/book/create',(req,res)=>{
    let createBook = new book(req.body);
    createBook.save((err)=>{
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
route1.get('/book',(req,res)=>
    book.find().exec((err,p)=>{
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
route1.put('/book/update/:id',(req,res)=>{
    book.findByIdAndUpdate(
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
route1.delete('/book/delete/:id',(req,res)=>{
    book.findByIdAndDelete(req.params.id).exec((err,deletebook)=>{
        if(err){
            return res.status(400).json({
                message : "Delete Unsuccessfull",err
            });
        }
        return res.status(200).json({
            message : "Delete Successfull",deletebook
        });
    });
});

//get specific student
route1.get('/book/:id',(req,res)=>{
    let bookid = req.params.id;
    book.findById(bookid,(err,p)=>{
        if(err){
            return res.status(400).json({Success:false,err});
        }
        return res.status(200).json({Success:true,p});
    });
});

module.exports = route1;