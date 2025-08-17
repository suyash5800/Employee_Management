// Department CSS is applied globally

import { useEmployee } from "../../authcontext/employeefetchcontext";
import { useState } from "react";
import EmpCardInfo from "./Dashboard-Models/Employee-model/empCardInfo";
import EmpInfoEdit from "./Dashboard-Models/Employee-model/emInfoEdit";

const EmpManagement = () => {
    const { tableData, employeeCount } = useEmployee();

    const [showCardModel, setshowCardModel] = useState(false);
    const [showEditModel, setshowEditModel] = useState(false);
    const [selectEmployeee, setselectEmployee] = useState(null);

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <h3><b>Maintain Employees Records</b></h3>
                </div>

                <div className="row table-container">
                    <table className="styled-table" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Profile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((d, index) => (
                                <tr key={d._id}>
                                    <td>{index + 1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.department || "No Department"}</td>
                                    <td className="text-center">
                                        {d.profileimage ? (
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
                                    <td>
                                        <div className="gap-3 d-flex">
                                            <button
                                                className="btn btn-success"
                                                onClick={() => {
                                                    setselectEmployee(d);
                                                    setshowCardModel(true);
                                                }}
                                            >
                                                View
                                            </button>

                                            <button
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    setselectEmployee(d);
                                                    setshowEditModel(true);
                                                }}
                                            >
                                                Edit
                                            </button>

                                            <button className="btn btn-danger">Delete</button>
                                            <button className="btn btn-primary">Leave</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}>
                                    <h4>Total Employee: {employeeCount}</h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {showCardModel && (
                <div className="custom-modal">
                    <EmpCardInfo
                        employee={selectEmployeee}
                        setshowCardModel={setshowCardModel}
                    />
                </div>
            )}

            {showEditModel && (
                <div className="custom-modal">
                    <EmpInfoEdit
                        employee={selectEmployeee}
                        setshowEditModel={setshowEditModel}
                    />
                </div>
            )}
        </div>
    );
};

export default EmpManagement;
