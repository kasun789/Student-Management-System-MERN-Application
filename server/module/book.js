const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    
    bookName:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    ISBN:{
        type:Number,
        required: true
    },
    noOfCopies:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        required: true
    }

});
module.exports = mongoose.model("book",bookSchema);
