import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState('');
    const [name , setname]= useState('')

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            if (password !== confirmPassword) {
                alert("Password and confirm password do not match");

                return;
            }

            const response = await axios.post("http://localhost:5800/api/auth/signup", { name,email, password });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate("/");

        } catch (error) {
            console.error("Signup error:", error);
            setErrorMsg(error.response?.data?.error || "Signup failed");
        }
    }

    return (
        <div className="container-fluid bg-primary min-vh-100 d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center text-primary mb-4">Welcome to Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3 text-start">
                        <label htmlFor="name">Enter the name </label>
                        <input type="text" 
                        className="form-control"
                        value={name}
                        onChange={(e)=> setname(e.target.value)}
                        required/>
                    </div>
                    <div className="form-group mb-3 text-start">
                        <label htmlFor="email">Enter your email:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Enter your password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="confirmPassword">Confirm password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="btn btn-danger w-100" type="submit">Register New User</button>
                    {errorMsg && <p className="text-danger mt-2">{errorMsg}</p>}
                </form>
            </div>
        </div>
    );
};

export default Signup;
