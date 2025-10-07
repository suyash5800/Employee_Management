import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const leavesProvider = ({ children }) => {

    const [leavesData, setleavesData] = useState([]);
    const [TotalLeaves, setTotalLeaves] = useState(0);
    const fetchLeaves = async () => {
        try {
            const res = await axios.get("http://localhost:5800/api/auth/leavesGets");
            setTotalLeaves(res.data.length);
            setleavesData(res.data);
            console.log("Fetching a Leaves data is succesfull");
        } catch (error) {
            console.log("faild to get Leaves data", error);


        }
    }
    return (
        <UserContext.Provider value={{ fetchLeaves,leavesProvider, leavesData, TotalLeaves }}>
            {children}
        </UserContext.Provider>
    );

};

export const useleaves =()=>useContext(UserContext);
export default leavesProvider;