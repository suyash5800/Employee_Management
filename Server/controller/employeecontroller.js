import User from "../user_modules/user.js";


const getEmp = async (req, res) => {
    try {
       const employees = await User.find();
       res.status(200).json(employees);


    } catch (error) {
        res.status(500).json({error: error.message});

    }

}

export {getEmp};