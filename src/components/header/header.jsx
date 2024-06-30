// header.jsx
import { useEffect, useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import StudentDashboardContext from "../../student-dashboard-context/StudentDashboardContext";

const Header = () => {
  const { head, setPageTitle, handleLogout, user } = useContext(
    StudentDashboardContext
  );

  useEffect(() => {
    const storedHeader = localStorage.getItem("head");
    if (storedHeader) {
      setPageTitle(storedHeader); // Ensure setPageTitle is a function and correctly updates head state
    } else {
      setPageTitle("Class");
    }
  }, [setPageTitle]); // Include setPageTitle in the dependency array

  const renderUserName = () => {
    if (user && user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return "Loading...";
  };

  const renderUserLogo = () => {
    if (user && user.firstName && user.lastName) {
      return (
        <>
          {user.firstName.toUpperCase()[0]}
          {user.lastName.toUpperCase()[0]}
        </>
      );
    }
    return null;
  };

  return (
    <header className="top__header d-flex align-items-center justify-content-between">
      <h1 className="heading">{head}</h1>
      <div className="user__profile d-flex gap-3">
        <h5 className="mt-3 mr-3 user__name">{renderUserName()}</h5>
        <div className="flex-icons">
          <div className="d-flex align-items-center justify-content-center dropdown">
            <span className="dropdown" type="button" data-bs-toggle="dropdown">
              <div className="user__logo d-flex align-items-center justify-content-center">
                {renderUserLogo()}
              </div>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  onClick={() => setPageTitle("Update Profile")}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <a className="dropdown-item" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
