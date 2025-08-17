import User from "../user_modules/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, error: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Incorrect password" });
    }

    const JWT_KEY = "jwtSkey5800580058008697";
    const token = jwt.sign({ _id: user._id, role: user.role }, JWT_KEY, { expiresIn: "1d" });

    return res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        name: user.name
      }
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};



const signup = async (req, res) => {
  try {
    const { name, email, password ,department } = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, error: "Email already registered" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    // Get profile image path (if uploaded)
    // this only line is very import for getting photo from frontend
    const profileimage = req.file?.path || null;

   
    const newUser = new User({
      name,
      email,
      department,
      password: hashedPassword,
      role: "employee",
      profileimage,
    });

    await newUser.save();

    const JWT_KEY = "jwtSkey5800580058008697";
    // Generate token
    const token = jwt.sign(
      { _id: newUser._id, role: newUser.role },
      JWT_KEY,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      success: true,
      token,
      user: {
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role,
        name: newUser.name,
        department:newUser.department,
        profileimage: newUser.profileimage,
      },
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

const verify = (req, res) => {
  return res.status(200).json({ success: false, user: req.user })

}




export { login, signup, verify };
