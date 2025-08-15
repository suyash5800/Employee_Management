
// im also using Department css(globally not modules) for style table components

import axios from "axios";
import { useEffect, useState } from "react";
import EmpCardInfo from "./Dashboard-Models/empCardInfo";

const EmpManagement = () => {
    const [tableData, settableData] = useState([]);
    const [showCardModel, setshowCardModel] = useState(false);

    const fetchemployee = async () => {
        try {
            const res = await axios.get("http://localhost:5800/api/auth/empployee");
            const filteredemployee = res.data.filter(user => user.role === "employee");
            settableData(filteredemployee);
            console.log("fetching emp successfully")

        } catch (error) {
            console.log("failed to fetch a data ", error.message);

        }
    }

    useEffect(() => { fetchemployee() }, []);

    return (
        <div className="container-fluid ">

            <div className="container">
                <div className="row ">
                    <h3><b>Maintain  Employees Records</b></h3>
                </div>
                <div className="row table-container">
                    <table className="styled-table" cellSpacing="0">
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Profile</th>
                            <th>Action</th>


                        </thead>
                        <tbody>
                            {tableData.map((d, index) => (
                                <tr key={d._id}>
                                    <td>{index + 1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.deparment ? d.deparment : ("No Depatment")}</td>
                                    <td className=" text-center"> {d.profileimage ? (
                                        <img
                                            src={`http://localhost:5800/${d.profileimage.replace(/\\/g, "/")}`}
                                            alt="Profile"
                                            width="70"
                                            height="50"
                                            style={{ borderRadius: "50%", objectFit: "cover" }}
                                        />
                                    ) : (
                                        "No Image"
                                    )}

                                    </td>
                                    <td><div className="gap-3 d-flex">
                                        <button className="btn btn-success " onClick={() => setshowCardModel(true)} >view</button>
                                        <button className="btn btn-warning ">Edit</button>
                                        <button className="btn btn-danger ">Salary</button>
                                        <button className="btn btn-primary">Leave</button>
                                    </div></td>
                                </tr>
                            ))}



                        </tbody>
                    </table>

                </div>
            </div>
            {showCardModel && (<div className="custom-modal">
                <div className=" bg-white p-3 rounded text-center border">
                    <EmpCardInfo />
                    <button className=" btn btn-outline-danger" onClick={() => setshowCardModel(false)} >cancle</button>
                </div>
            </div>)}
        </div>




    )

}


export default EmpManagement;