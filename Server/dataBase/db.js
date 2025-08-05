import mongoose from "mongoose";
const dblink ="mongodb://localhost:27017/Ems";
const connetToDatabase = async () =>{

    try {
        await mongoose.connect(dblink);
    } catch (error) {
        console.log(error);
        
    }
}

export default connetToDatabase;