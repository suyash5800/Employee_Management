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
    console.log("🔥 updateemployee route HIT:", req.params.id);
    try {
        const id = req.params.id;

        // Log incoming data
        console.log("Updating employee:", id);
        console.log("Request body:", req.body);
        console.log("Uploaded file:", req.file);

        // Destructure with fallback defaults
        const {
            name = "",
            email = "",
            department = "",
            password = ""
        } = req.body;

        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Update text fields only if provided
        if (name.trim() !== "") userExist.name = name;
        if (email.trim() !== "") userExist.email = email;
        if (department.trim() !== "") userExist.department = department;

        // Update password only if new password is provided
        if (password.trim() !== "") {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            userExist.password = hashedPassword;
        }

        // Update profile image if a new one is uploaded
        if (req.file) {
            // Delete old image if it exists
            if (userExist.profileimage && fs.existsSync(userExist.profileimage)) {
                fs.unlinkSync(userExist.profileimage);
            }
            userExist.profileimage = req.file.path;
        }

        // Save the updated employee
        const updatedUser = await userExist.save();
        console.log("User saved:", updatedUser);

        res.status(200).json({
            message: "Employee updated successfully",
            user: updatedUser,
        });

    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ error: error.message });
    }
};


export { GetEmp, updateemployee }