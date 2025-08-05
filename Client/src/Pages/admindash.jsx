import { useEffect } from "react";
import { useAuth } from "../authcontext/authcontext.jsx";
import { useNavigate, NavLink } from "react-router-dom";

const Admindashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white p-3">
          <h4 className="text-center">MyApp</h4>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <button className="btn text-white bg-danger w-100 mb-2" onClick={logout}>
                Logout
              </button>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "bg-white text-dark rounded" : ""}`
                }
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "bg-white text-dark rounded" : ""}`
                }
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-0">
          {/* Top Navbar */}
          <nav className="navbar navbar-light bg-light px-4">
            <span className="navbar-brand mb-0 h1">
              Dashboard {user ? user.name || user.email : "Guest"}
            </span>
            <button className="btn btn-outline-danger btn-sm" onClick={logout}>
              Logout
            </button>
          </nav>

          {/* Content */}
          <div className="p-4">
            <h3>Welcome to the Admin Dashboard</h3>
            <p>This is a basic admin dashboard layout using React and Bootstrap.</p>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Users</h5>
                    <p className="card-text">Manage user accounts and permissions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Reports</h5>
                    <p className="card-text">View system reports and analytics.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Settings</h5>
                    <p className="card-text">Configure system preferences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Admindashboard;
