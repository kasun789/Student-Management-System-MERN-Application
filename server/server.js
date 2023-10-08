const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const studentDetails = require('./routes/student');
const bookDetails = require('./routes/book');
const subjectDetails = require('./routes/subject');
const nonAcademicStaffDetails = require('./routes/non-academic-staff');
const teachersDetails = require('./routes/teachers');
const PORT = 3500;
app.use(bodyParser.json());
app.use(studentDetails);
app.use(bookDetails);
app.use(subjectDetails);
app.use(nonAcademicStaffDetails);
app.use(teachersDetails);
app.use(cors());


app.listen(PORT,()=>{
    console.log(`listing on ${PORT} `)
});
const URL_MON = "mongodb+srv://kasun:kasun@cluster0.4ttnhtn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URL_MON).then(()=>{
    console.log("DB connection successful");
}).catch((err)=>{
    console.log("DB connection Unsuccessful",err)
})