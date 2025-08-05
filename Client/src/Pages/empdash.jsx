import { useAuth } from "../authcontext/authcontext.jsx"



const Empdashboard = () => {
  const { logout } = useAuth();


  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-info text-white p-3 min-vh-100" style={{ width: '220px' }}>
        <h4>Employee Portal</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Dashboard</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Profile</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Attendance</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Settings</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light px-4" style={{ backgroundColor: '#00aaff' }}>
          <span className="navbar-brand text-white">Dashboard</span>
          <div className="ms-auto row">
            <div className="col-lg-6 ">
              <button className=" btn bg-danger text-white" onClick={logout} >logout</button>

            </div>
            <div className="col-lg-6"> <span className="text-white">Welcome, John Doe</span></div>

          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-4 bg-light min-vh-100">
          <h2 className="text-primary">Employee Summary</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card text-white bg-info mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Projects</h5>
                  <p className="card-text fs-4">12</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Attendance</h5>
                  <p className="card-text fs-4">95%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">Pending Tasks</h5>
                  <p className="card-text fs-4">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empdashboard;
