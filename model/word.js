const mongoose =require('mongoose')

const wordSchema=new mongoose.Schema({
    word:{
        type:String,
    },
    frequency:{
        type:Number,
        default:1
    }
})
module.exports=mongoose.model("Word",wordSchema)