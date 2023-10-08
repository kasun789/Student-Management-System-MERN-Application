const mongoose = require('mongoose');

const nonAcademicSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    nicNo:{
        type:String,
        required: true
    },
    contactNo:{
        type:String,
        required: true
    },
    position:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('NonAcademicStaff',nonAcademicSchema);