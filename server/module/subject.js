const mongoose = require("mongoose");

const subjectDetails = new mongoose.Schema({
    subjectName:{
        type:String,
        required:true
    },
    subjectCode:{
        type:String,
        required:true
    },
    teacherName:{
        type:String,
        required:true
    },
    Grade:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("subject",subjectDetails);