import { useAuth  } from "../../authcontext/authcontext";
import { useEmployee } from "../../authcontext/employeefetchcontext";

const DashboardHome = () => {
const {departmentCount} = useAuth();
const {employeeCount} = useEmployee();

    return (
        <div className="container-fluid   ">
            <h3 className="mb-4   ">Dashboard Overview</h3>

            <div className="row g-4 d-flex justify-content-center align-items-center">
                {/* Total Employees Card */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow-sm p-3">
                        <div className="d-flex align-items-center">
                            <div className="me-3  text-primary fs-1">
                                <i className="bi bi-bookmark-heart-fill"></i>
                            </div>
                            <div>
                                <h6 className="mb-1">Total Employees </h6>
                                <h5>{employeeCount}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Card 2 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow-sm p-3">
                        <div className="d-flex align-items-center">
                            <div className="me-3  text-success fs-1">
                                <i class="bi bi-building-fill-gear"></i>
                            </div>
                            <div>
                                <h6 className="mb-1">Total Departments </h6>
                                <h5>{departmentCount}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Card 3 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card shadow-sm p-3">
                        <div className="d-flex align-items-center">
                            <div className="me-3 text-danger fs-1">
                                <i className="bi bi-cash-coin"></i>
                            </div>
                            <div>
                                <h6 className="mb-1">Total Monthly pay</h6>
                                <h5>$96500</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* row 2nd  leaves Details */}
            <div className="row my-4">
                <h3 className="text-primary" >Leaves Details </h3>
                {/* card 1 */}
                <div className="col-lg-6">
                    <div className="card shadow-sm p-3">
                        <div className="d-flex align-items-center">
                            <div className="icon-div me-3 fs-1 text-warning">
                                <i class="bi bi-archive-fill"></i>
                            </div>
                            <div className="card-text">
                                <h6 className="mb-1">Leaves Applied </h6>
                                <h5>120</h5>
                            </div>
                        </div>


                    </div>
                </div>
                {/* card 2 */}
                <div className="col-lg-6">
                    <div className="card shadow-sm p-3">
                        <div className="d-flex align-items-center">
                            <div className="icon-div me-3 text-primary fs-1">
                                <i class="bi bi-send-check-fill"></i>
                            </div>
                            <div className="card-text">
                                <h6 className="mb-1">Leaves Approved </h6>
                                <h5>120</h5>

                            </div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="col-lg-6 my-2">
                    <div className="card  shadow-sm p-3">
                        <div className="d-flex align-items-center">
                            <div className="icon-div me-3 fs-1 text-primary  ">
                                <i class="bi bi-hourglass-split"></i>
                            </div>
                            <div className="card-text">
                                <h6 className="mb-1">leaves pending </h6>
                                <h5>12</h5>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="col-lg-6">
                    <div className="card   shadow-sm p-3 ">
                        <div className="d-flex align-item-center">
                            <div className="icon-div me-3 fs-1 text-white bg-danger p-1 ">
                                <i class="bi bi-x-square-fill"></i>
                            </div>
                            <div className="card-text">
                                <h6 className="mb-1">leaves pending </h6>
                                <h5>12</h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
