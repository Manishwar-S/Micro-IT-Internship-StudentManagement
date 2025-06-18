const mongoose=require("mongoose")


const studentSchema=new mongoose.Schema({
    name:String,
    rollno:String,
    grade:String,
    section:String,
    email:String,
})
module.exports=mongoose.model("Student",studentSchema)