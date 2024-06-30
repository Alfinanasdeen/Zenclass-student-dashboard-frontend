import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import LOGO from "../../assets/ZenLogo.png";
import "./LoggedOut.css"; // Updated CSS import with proper case

const LoggedOut = () => {
  const { handleLogout } = useContext(DataContext);

  return (
    <div className="loggedOut">
      <div className="img__container">
        <img src={LOGO} alt=".." className="logo" />
      </div>
      <div className="body__container rounded">
        <h3 className="text-center mb-5">
          User has been logged out. Please go to the Login page.
        </h3>
        <div className="text-center">
          <Link
            to="/dashboard"
            onClick={handleLogout}
            className="btn btn-success"
          >
            Go To Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoggedOut;
