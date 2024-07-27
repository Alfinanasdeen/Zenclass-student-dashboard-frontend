import { useEffect, useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import StudentDashboardContext from "../../student-dashboard-context/StudentDashboardContext";
import PROFILE from "../../assets/profile.png";

const Header = () => {
  const { pageTitle, setPageTitle, handleLogout, user } = useContext(
    StudentDashboardContext
  );

  useEffect(() => {
    const storedHeader = localStorage.getItem("pageTitle");
    if (storedHeader) {
      setPageTitle(storedHeader);
    } else {
      setPageTitle("Class");
    }
  }, [setPageTitle]);

  const renderUserName = () => {
    if (user) {
      return `${user.name || user.student.name} `;
    }
    return "Loading...";
  };

  // const renderUserLogo = () => {
  //   if (user.name && user.lName) {
  //     return <>{user.lName.toUpperCase()[0]}</>;
  //   }
  //   return null;
  // };

  return (
    <header className="top__header d-flex align-items-center justify-content-between">
      <h1 className="heading">{pageTitle}</h1>
      <div className="user__profile d-flex">
        <h5 className="mt-3 mr-3 user__name">{renderUserName()}</h5>
        <div className="flex-icons">
          <div className="d-flex align-items-center justify-content-center dropdown">
            <span className="dropdown" type="button" data-bs-toggle="dropdown">
              <div className="user__logo d-flex align-items-center justify-content-center">
                {/* {renderUserLogo()} */}
                <img src={PROFILE} alt="User Avatar" />
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
