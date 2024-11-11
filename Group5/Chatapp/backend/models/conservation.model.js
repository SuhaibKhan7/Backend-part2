import mongoose from "mongoose";
const ConservationShema=new mongoose.Schema({
    participants:[{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    }]
})
const Conservation=mongoose.model('conservation',ConservationShema)
export  default Conservation