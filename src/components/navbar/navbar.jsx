import { useContext } from "react";
import "./navbar.css";
import Logo from "../../assets/ZenLogo.png";
import { navBarLink } from "../../data"; 
import { NavLink } from "react-router-dom";
import StudentDashboardContext from "../../student-dashboard-context/StudentDashboardContext"; 

const Navbar = () => {
  const { handlePageTitleChange, toggle } = useContext(StudentDashboardContext); 
  return (
    <nav className={`navbar__side ${toggle ? "active" : ""}`}>
      <div className="nav__header d-flex align-items-center gap-2">
        <img src={Logo} alt="Logo" className="img" />{" "}
        {/* Ensure Logo component is correctly imported */}
        <h2 className="user">Student</h2>
      </div>
      <div className="nav__link d-flex flex-column gap-3">
        {navBarLink.map((nav) => (
          <li key={nav.id} onClick={() => handlePageTitleChange(nav.name)}>
            <NavLink
              to={nav.link}
              className={({ isActive }) =>
                isActive ? "nav__item nav-active" : "nav__item text-secondary"
              }
            >
              <span className="nav__icon">{nav.icon}</span>
              <span className="nav__title">{nav.name}</span>
            </NavLink>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
