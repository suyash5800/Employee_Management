import mongoose  from "mongoose";

const departSchema = new mongoose.Schema({
    name :{type:String , required : true , unique:true}
})

const departmentRegistor = mongoose.model("departments",departSchema);
export default departmentRegistor ;