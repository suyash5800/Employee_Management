import User from "../user_modules/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const GetEmp = async (req, res) => {
    try {
       const employees = await User.find();
       res.status(200).json(employees);


    } catch (error) {
        res.status(500).json({error: error.message});

    }

}

const getupdateemployee = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }

}

export default GetEmp;