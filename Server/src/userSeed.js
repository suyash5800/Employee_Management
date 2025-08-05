import User from "../user_modules/user.js"
import bcrypt from "bcrypt";
import connetToDatabase from "../dataBase/db.js";
const userRegister = async () =>{
 connetToDatabase();
    try {
        const hasspass = await bcrypt.hash("admin",10);
        const newUser = new User({
            name: "suyaAdmin",
            email:"admin@gmail.com",
            password:hasspass,
            role :"admin"
        })

        await newUser.save()
        
    } catch (error) {
        console.log(error);
        
    }
}

userRegister();