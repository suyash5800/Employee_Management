import axios from "axios";
import { useState, useContext, useEffect ,createContext } from "react";
import { useLocation } from "react-router-dom";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const [tableData, settableData] = useState([]);
    const [employeeCount, setemployeeCount] = useState(0);
    const location = useLocation();
    const fetchemployee = async () => {

        try {
            const res = await axios.get("http://localhost:5800/api/auth/employee");
            const filteredemployee = res.data.filter(user => user.role === "employee");
            settableData(filteredemployee);
            setemployeeCount(filteredemployee.length);

        } catch (error) {

            console.log("failed to fetch for Employeee");

        }

    }
     useEffect(() => { fetchemployee(); }, [location])
    return (
        <EmployeeContext.Provider value={{ tableData, employeeCount }}>
            {children}
        </EmployeeContext.Provider >

    )

}

export const useEmployee = () => useContext(EmployeeContext);
export default EmployeeProvider;