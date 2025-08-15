import User from "../user_modules/user.js";
import bcrypt from "bcrypt";
import connetToDatabase from "../dataBase/db.js";

const userRegister = async () => {
    await connetToDatabase(); 

    try {
        const hasspass = await bcrypt.hash("admin", 10);

        const newUser = new User({
            name: "suyashPatil",
            email: "SuyaPatil5800@gmail.com",
            password: hasspass,
            role: "admin",
           profilepic: "https://example.com/images/default-profile.jpg" 
        });

        await newUser.save();
        console.log("Admin user created successfully.");
    } catch (error) {
        console.log("Error creating admin user:", error);
    }
};

userRegister();
