import jwt from "jsonwebtoken";


const verifyUser = async () => {
    const JWT_KEY = "jwtSkey5800580058008697";
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(404).json({ success: false, error: "Token Not found" });
        }

        const decoded = jwt.verify(token, JWT_KEY);
        if (!decoded) {
            return res.status(404).json({ success: false, error: "Token Not valid" });
        }
        const user = await User.findById({ _id: decoded._id }).Select('-password')
        if (!user) {
            return res.status(404).json({ success: false, error: "User not fond " });
        }
        req.user = user;
        Next();
 
    } catch (error) {
        return res.status(500).json({ success: false, error: "server error" });

    }
}

export  default verifyUser;