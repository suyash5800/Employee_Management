import User from "../user_modules/user.js";
import bcrypt from "bcrypt";

import fs from "fs";


const GetEmp = async (req, res) => {
    try {
        const employees = await User.find();
        res.status(200).json(employees);


    } catch (error) {
        res.status(500).json({ error: error.message });

    }

}

const updateemployee = async (req, res) => {
    try {

        const { name, email, department, password } = req.body;
        const id = req.params.id;

        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(404).json({ message: "Employee not found" });
        }

        userExist.name = name || userExist.name;
        userExist.email = email || userExist.email;
        userExist.department = department || userExist.department;

        if (password && password.trim() !== "") {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            userExist.password = hashedPassword;
        }

        if (req.file) {
            if (userExist.profileimage && fs.existsSync(userExist.profileimage)) {
                fs.unlinkSync(userExist.profileimage);
            }
            userExist.profileimage = req.file.path;
        }


        console.log("User before save:", userExist);
        await userExist.save();
        console.log("User saved");
        res.status(200).json({ message: "Employee updated sucessfully " });

    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ error: error.message });
    }

}

export { GetEmp, updateemployee }