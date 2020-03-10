const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female']
    },
    active:{
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model('employee',employeeSchema);