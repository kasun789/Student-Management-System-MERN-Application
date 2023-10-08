const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
    
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required: true
    },
    contactNo:{
        type:String,
        required: true
    },
    grade:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("student",studentDetails);
