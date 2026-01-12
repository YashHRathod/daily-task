const mongoose= require("mongoose")
const TodoSchema= new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    tags:{
        type:[String]
    },
    metadata:{
        priority:{
            type:Number
        },
        dueDate:{
            type:Date
        },

    }

},
{
    timestamps:true,
});
module.exports=mongoose.model("Todo",TodoSchema)