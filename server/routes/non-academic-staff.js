const express = require('express');

const NonAcademicStaff = require('../module/non-academic-staff');

const router = express.Router();

//add a non academic staff
router.post('/nonAcademicStaff/add',(req,res)=>{
    let newNonAcademicStaff = new NonAcademicStaff(req.body);

    newNonAcademicStaff.save((err) =>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Non-academic user is successfully created"
        });
    });
});

//get method
router.get('/nonAcademicStaff',(req,res)=>
    NonAcademicStaff.find().exec((err,nonAcademicStaff)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            Success : true,
            existingNonAcademicStaff:nonAcademicStaff
        });
    })
);

//update method
router.put('/nonAcademicStaff/edit/:id',(req,res)=>{
    NonAcademicStaff.findByIdAndUpdate(
        req.params.id,{
            $set : req.body
        },
        (err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated Successfully."
            });
        }
    )
    
});

//delete method
router.delete('/nonAcademicStaff/delete/:id',(req,res)=>{
    NonAcademicStaff.findByIdAndDelete(req.params.id).exec((err,deleteNonAcademicStaff)=>{
        if(err){
            return res.status(400).json({
                message : "Delete was Unsuccessful",err
            });
        }
        return res.status(200).json({
            message : "Deleted Successfully",deleteNonAcademicStaff
        });
    });
});

//get specific non academic
router.get('/nonAcademicStaff/:id',(req,res)=>{
    let nonAcademicId = req.params.id;
    NonAcademicStaff.findById(nonAcademicId,(err,nonAcademicStaff)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({success:true,nonAcademicStaff})
    })
});

module.exports = router;