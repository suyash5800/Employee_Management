import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyUser = async () => {
            const token = localStorage.getItem('token');

            try {
                if (token) {
                    const response = await axios.get('http://localhost:5173/api/auth/verify', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (response.data.success) {
                        setUser(response.data.user);
                    }
                } else {
                    navigate("/");
                }
            } catch (error) {
                if (error.response) {
                    console.error("Verification failed:", error.response.data);
                    navigate("/");
                } else {
                    console.error("Network error or server down:", error);
                }
            }
        };

        verifyUser();
    }, [navigate]);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);
export default AuthProvider;
